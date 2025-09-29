const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  attachments: [{
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  moderation: {
    flags: [{
      type: String,
      enum: ['spam', 'inappropriate', 'personal_info', 'contact_attempt', 'other']
    }],
    blocked: {
      type: Boolean,
      default: false
    },
    reasons: [{
      type: String
    }],
    moderatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    moderatedAt: {
      type: Date,
      default: null
    }
  },
  isRead: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date,
    default: null
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes
messageSchema.index({ chatId: 1, createdAt: -1 });
messageSchema.index({ senderId: 1 });
messageSchema.index({ 'moderation.blocked': 1 });

// Virtual for message status
messageSchema.virtual('status').get(function() {
  if (this.moderation.blocked) return 'blocked';
  if (this.isRead) return 'read';
  return 'unread';
});

// Mark as read
messageSchema.methods.markAsRead = function() {
  this.isRead = true;
  this.readAt = new Date();
  return this.save();
};

// Block message
messageSchema.methods.blockMessage = function(reasons, moderatorId) {
  this.moderation.blocked = true;
  this.moderation.reasons = reasons;
  this.moderation.moderatedBy = moderatorId;
  this.moderation.moderatedAt = new Date();
  return this.save();
};

module.exports = mongoose.model('Message', messageSchema);
