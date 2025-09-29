const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  domain: {
    type: String,
    required: true,
    trim: true
  },
  budget: {
    min: {
      type: Number,
      required: true,
      min: 0
    },
    max: {
      type: Number,
      required: true,
      min: 0
    },
    currency: {
      type: String,
      default: 'INR'
    }
  },
  status: {
    type: String,
    enum: ['draft', 'requested', 'quoted', 'assigned', 'in-progress', 'in-review', 'delivered', 'completed', 'disputed', 'cancelled'],
    default: 'draft'
  },
  assignedProfessionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  milestones: [{
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'approved'],
      default: 'pending'
    },
    dueDate: {
      type: Date,
      required: true
    },
    completedAt: {
      type: Date,
      default: null
    }
  }],
  escrow: {
    status: {
      type: String,
      enum: ['pending', 'funded', 'released', 'refunded'],
      default: 'pending'
    },
    amount: {
      type: Number,
      default: 0
    },
    transactionRefs: [{
      type: String
    }]
  },
  timeline: {
    requestedAt: {
      type: Date,
      default: Date.now
    },
    assignedAt: {
      type: Date,
      default: null
    },
    startedAt: {
      type: Date,
      default: null
    },
    dueAt: {
      type: Date,
      default: null
    },
    completedAt: {
      type: Date,
      default: null
    }
  },
  requirements: {
    technical: [{
      type: String,
      trim: true
    }],
    functional: [{
      type: String,
      trim: true
    }],
    deliverables: [{
      type: String,
      trim: true
    }]
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
projectSchema.index({ studentId: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ domain: 1 });
projectSchema.index({ assignedProfessionalId: 1 });
projectSchema.index({ createdAt: -1 });

// Virtual for total budget
projectSchema.virtual('totalBudget').get(function() {
  return this.milestones.reduce((total, milestone) => total + milestone.amount, 0);
});

// Virtual for progress percentage
projectSchema.virtual('progressPercentage').get(function() {
  if (this.milestones.length === 0) return 0;
  const completedMilestones = this.milestones.filter(m => m.status === 'completed').length;
  return Math.round((completedMilestones / this.milestones.length) * 100);
});

// Update project status based on milestones
projectSchema.methods.updateStatus = function() {
  const completedMilestones = this.milestones.filter(m => m.status === 'completed').length;
  const totalMilestones = this.milestones.length;
  
  if (completedMilestones === 0) {
    this.status = 'assigned';
  } else if (completedMilestones === totalMilestones) {
    this.status = 'completed';
    this.timeline.completedAt = new Date();
  } else {
    this.status = 'in-progress';
  }
  
  return this.save();
};

module.exports = mongoose.model('Project', projectSchema);
