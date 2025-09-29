const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  authId: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['student', 'professional', 'reviewer', 'moderator', 'admin'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['active', 'suspended', 'deleted'],
    default: 'active'
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isKycVerified: {
    type: Boolean,
    default: false
  },
  isBackgroundVerified: {
    type: Boolean,
    default: false
  },
  // Student specific fields
  institution: {
    type: String,
    required: function() { return this.role === 'student'; }
  },
  course: {
    type: String,
    required: function() { return this.role === 'student'; }
  },
  academicYear: {
    type: String,
    required: function() { return this.role === 'student'; }
  },
  // Professional specific fields
  skills: [{
    type: String,
    trim: true
  }],
  experience: {
    type: String,
    required: function() { return this.role === 'professional'; }
  },
  portfolio: {
    type: String,
    default: ''
  },
  headline: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  domains: [{
    type: String,
    trim: true
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  // Verification details
  verification: {
    kycLevel: {
      type: String,
      enum: ['none', 'basic', 'enhanced'],
      default: 'none'
    },
    verifiedAt: {
      type: Date,
      default: null
    },
    documents: [{
      type: {
        type: String,
        enum: ['id', 'address', 'education', 'experience']
      },
      url: String,
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
      }
    }]
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ role: 1, status: 1 });
userSchema.index({ skills: 1 });
userSchema.index({ domains: 1 });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS) || 12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Get public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.verification.documents;
  return userObject;
};

// Update last login
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
