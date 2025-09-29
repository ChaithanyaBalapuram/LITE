const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  lastMessage: {
    content: {
      type: String,
      default: ''
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    timestamp: {
      type: Date,
      default: null
    }
  },
  unreadCount: {
    type: Map,
    of: Number,
    default: new Map()
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes
chatSchema.index({ projectId: 1 });
chatSchema.index({ participants: 1 });
chatSchema.index({ 'lastMessage.timestamp': -1 });

// Virtual for participant count
chatSchema.virtual('participantCount').get(function() {
  return this.participants.length;
});

// Update last message
chatSchema.methods.updateLastMessage = function(content, senderId) {
  this.lastMessage = {
    content: content.substring(0, 100), // Truncate for preview
    senderId: senderId,
    timestamp: new Date()
  };
  this.updatedAt = new Date();
  return this.save();
};

// Update unread count
chatSchema.methods.updateUnreadCount = function(userId, increment = 1) {
  const currentCount = this.unreadCount.get(userId.toString()) || 0;
  this.unreadCount.set(userId.toString(), Math.max(0, currentCount + increment));
  return this.save();
};

// Mark as read for user
chatSchema.methods.markAsRead = function(userId) {
  this.unreadCount.set(userId.toString(), 0);
  return this.save();
};

module.exports = mongoose.model('Chat', chatSchema);
