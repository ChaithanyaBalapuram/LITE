const express = require('express');
const { body, validationResult } = require('express-validator');
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

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user.getPublicProfile()
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update user profile
router.put('/profile', authenticateToken, [
  body('displayName').optional().trim(),
  body('bio').optional().trim(),
  body('headline').optional().trim(),
  body('skills').optional().isArray(),
  body('domains').optional().isArray(),
  body('portfolio').optional().trim()
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

    const { displayName, bio, headline, skills, domains, portfolio } = req.body;
    const updateData = {};

    if (displayName) updateData.displayName = displayName;
    if (bio) updateData.bio = bio;
    if (headline) updateData.headline = headline;
    if (skills) updateData.skills = skills;
    if (domains) updateData.domains = domains;
    if (portfolio) updateData.portfolio = portfolio;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user: user.getPublicProfile()
      }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get professionals directory
router.get('/professionals', async (req, res) => {
  try {
    const { domain, skills, page = 1, limit = 10, sort = 'rating' } = req.query;
    
    // Build filter
    const filter = {
      role: 'professional',
      status: 'active',
      isBackgroundVerified: true
    };

    if (domain) {
      filter.domains = { $in: [new RegExp(domain, 'i')] };
    }

    if (skills) {
      const skillsArray = skills.split(',').map(s => s.trim());
      filter.skills = { $in: skillsArray.map(s => new RegExp(s, 'i')) };
    }

    // Build sort
    let sortObj = {};
    switch (sort) {
      case 'rating':
        sortObj = { 'rating.average': -1, 'rating.count': -1 };
        break;
      case 'experience':
        sortObj = { experience: -1 };
        break;
      case 'newest':
        sortObj = { createdAt: -1 };
        break;
      default:
        sortObj = { 'rating.average': -1 };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const professionals = await User.find(filter)
      .select('-password -verification.documents')
      .sort(sortObj)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await User.countDocuments(filter);

    res.json({
      success: true,
      data: {
        professionals,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          count: professionals.length,
          totalCount: total
        }
      }
    });

  } catch (error) {
    console.error('Get professionals error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get professional by ID
router.get('/professionals/:id', async (req, res) => {
  try {
    const professional = await User.findOne({
      _id: req.params.id,
      role: 'professional',
      status: 'active'
    }).select('-password -verification.documents');

    if (!professional) {
      return res.status(404).json({
        success: false,
        message: 'Professional not found'
      });
    }

    res.json({
      success: true,
      data: {
        professional
      }
    });

  } catch (error) {
    console.error('Get professional error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Upload avatar
router.post('/avatar', authenticateToken, async (req, res) => {
  try {
    // This would integrate with file upload middleware
    // For now, just return success
    res.json({
      success: true,
      message: 'Avatar upload endpoint - to be implemented with multer'
    });
  } catch (error) {
    console.error('Upload avatar error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Change password
router.put('/password', authenticateToken, [
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 6 })
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

    const { currentPassword, newPassword } = req.body;

    // Verify current password
    const user = await User.findById(req.user._id).select('+password');
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: 'Password updated successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
