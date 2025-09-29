const express = require('express');
const { body, validationResult } = require('express-validator');
const Message = require('../models/Message');
const Chat = require('../models/Chat');
const User = require('../models/User');
const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

// Get user's chats
router.get('/chats', authenticateToken, async (req, res) => {
  try {
    const chats = await Chat.find({
      participants: req.user._id,
      isActive: true
    })
    .populate('participants', 'displayName email avatar')
    .populate('projectId', 'title status')
    .sort({ 'lastMessage.timestamp': -1 });

    res.json({
      success: true,
      data: {
        chats
      }
    });

  } catch (error) {
    console.error('Get chats error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get chat by ID
router.get('/chats/:chatId', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId)
      .populate('participants', 'displayName email avatar')
      .populate('projectId', 'title status');

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: 'Chat not found'
      });
    }

    // Check if user is participant
    const isParticipant = chat.participants.some(
      participant => participant._id.toString() === req.user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: {
        chat
      }
    });

  } catch (error) {
    console.error('Get chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get messages for a chat
router.get('/chats/:chatId/messages', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const chat = await Chat.findById(req.params.chatId);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: 'Chat not found'
      });
    }

    // Check if user is participant
    const isParticipant = chat.participants.some(
      participant => participant.toString() === req.user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    const messages = await Message.find({
      chatId: req.params.chatId,
      'moderation.blocked': false
    })
    .populate('senderId', 'displayName avatar')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));

    const total = await Message.countDocuments({
      chatId: req.params.chatId,
      'moderation.blocked': false
    });

    res.json({
      success: true,
      data: {
        messages: messages.reverse(),
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          count: messages.length,
          totalCount: total
        }
      }
    });

  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Send message
router.post('/chats/:chatId/messages', authenticateToken, [
  body('content').notEmpty().trim().isLength({ max: 2000 }),
  body('attachments').optional().isArray()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const chat = await Chat.findById(req.params.chatId);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: 'Chat not found'
      });
    }

    // Check if user is participant
    const isParticipant = chat.participants.some(
      participant => participant.toString() === req.user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Create message
    const messageData = {
      chatId: req.params.chatId,
      senderId: req.user._id,
      content: req.body.content,
      attachments: req.body.attachments || []
    };

    const message = new Message(messageData);
    await message.save();

    // Update chat's last message
    await chat.updateLastMessage(req.body.content, req.user._id);

    // Update unread count for other participants
    for (const participantId of chat.participants) {
      if (participantId.toString() !== req.user._id.toString()) {
        await chat.updateUnreadCount(participantId, 1);
      }
    }

    // Populate sender info
    await message.populate('senderId', 'displayName avatar');

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        message
      }
    });

  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Mark messages as read
router.put('/chats/:chatId/read', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: 'Chat not found'
      });
    }

    // Check if user is participant
    const isParticipant = chat.participants.some(
      participant => participant.toString() === req.user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Mark messages as read
    await Message.updateMany(
      {
        chatId: req.params.chatId,
        senderId: { $ne: req.user._id },
        isRead: false
      },
      {
        isRead: true,
        readAt: new Date()
      }
    );

    // Reset unread count
    await chat.markAsRead(req.user._id);

    res.json({
      success: true,
      message: 'Messages marked as read'
    });

  } catch (error) {
    console.error('Mark messages as read error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Create chat for project
router.post('/chats', authenticateToken, [
  body('projectId').notEmpty().isMongoId(),
  body('participantId').notEmpty().isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { projectId, participantId } = req.body;

    // Check if chat already exists
    const existingChat = await Chat.findOne({
      projectId,
      participants: { $all: [req.user._id, participantId] }
    });

    if (existingChat) {
      return res.json({
        success: true,
        message: 'Chat already exists',
        data: {
          chat: existingChat
        }
      });
    }

    // Create new chat
    const chatData = {
      projectId,
      participants: [req.user._id, participantId]
    };

    const chat = new Chat(chatData);
    await chat.save();

    await chat.populate('participants', 'displayName email avatar');
    await chat.populate('projectId', 'title status');

    res.status(201).json({
      success: true,
      message: 'Chat created successfully',
      data: {
        chat
      }
    });

  } catch (error) {
    console.error('Create chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
