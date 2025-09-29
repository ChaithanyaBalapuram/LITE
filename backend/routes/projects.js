const express = require('express');
const { body, validationResult } = require('express-validator');
const Project = require('../models/Project');
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

// Create new project
router.post('/', authenticateToken, [
  body('title').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('domain').notEmpty().trim(),
  body('budget.min').isNumeric().isInt({ min: 0 }),
  body('budget.max').isNumeric().isInt({ min: 0 }),
  body('requirements.technical').optional().isArray(),
  body('requirements.functional').optional().isArray(),
  body('requirements.deliverables').optional().isArray()
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

    // Only students can create projects
    if (req.user.role !== 'student') {
      return res.status(403).json({
        success: false,
        message: 'Only students can create projects'
      });
    }

    const projectData = {
      ...req.body,
      studentId: req.user._id,
      status: 'requested'
    };

    const project = new Project(projectData);
    await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: {
        project
      }
    });

  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get user's projects
router.get('/my-projects', authenticateToken, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const filter = {};
    
    if (req.user.role === 'student') {
      filter.studentId = req.user._id;
    } else if (req.user.role === 'professional') {
      filter.assignedProfessionalId = req.user._id;
    } else {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    if (status) {
      filter.status = status;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const projects = await Project.find(filter)
      .populate('studentId', 'displayName email')
      .populate('assignedProfessionalId', 'displayName email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Project.countDocuments(filter);

    res.json({
      success: true,
      data: {
        projects,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          count: projects.length,
          totalCount: total
        }
      }
    });

  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get project by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('studentId', 'displayName email phone')
      .populate('assignedProfessionalId', 'displayName email phone skills');

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check if user has access to this project
    const hasAccess = 
      project.studentId._id.toString() === req.user._id.toString() ||
      (project.assignedProfessionalId && project.assignedProfessionalId._id.toString() === req.user._id.toString()) ||
      req.user.role === 'admin' ||
      req.user.role === 'moderator';

    if (!hasAccess) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: {
        project
      }
    });

  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update project
router.put('/:id', authenticateToken, [
  body('title').optional().trim(),
  body('description').optional().trim(),
  body('status').optional().isIn(['draft', 'requested', 'quoted', 'assigned', 'in-progress', 'in-review', 'delivered', 'completed', 'disputed', 'cancelled'])
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

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // Check permissions
    const canUpdate = 
      project.studentId.toString() === req.user._id.toString() ||
      (project.assignedProfessionalId && project.assignedProfessionalId.toString() === req.user._id.toString()) ||
      req.user.role === 'admin' ||
      req.user.role === 'moderator';

    if (!canUpdate) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('studentId', 'displayName email')
     .populate('assignedProfessionalId', 'displayName email');

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: {
        project: updatedProject
      }
    });

  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get available projects for professionals
router.get('/available/list', authenticateToken, async (req, res) => {
  try {
    // Only professionals can view available projects
    if (req.user.role !== 'professional') {
      return res.status(403).json({
        success: false,
        message: 'Only professionals can view available projects'
      });
    }

    const { domain, budget, page = 1, limit = 10 } = req.query;
    
    const filter = {
      status: 'requested',
      assignedProfessionalId: null
    };

    if (domain) {
      filter.domain = new RegExp(domain, 'i');
    }

    if (budget) {
      const budgetNum = parseInt(budget);
      filter['budget.max'] = { $gte: budgetNum };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const projects = await Project.find(filter)
      .populate('studentId', 'displayName email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Project.countDocuments(filter);

    res.json({
      success: true,
      data: {
        projects,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / parseInt(limit)),
          count: projects.length,
          totalCount: total
        }
      }
    });

  } catch (error) {
    console.error('Get available projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Apply for project
router.post('/:id/apply', authenticateToken, [
  body('proposal').notEmpty().trim(),
  body('timeline').notEmpty().trim(),
  body('amount').isNumeric().isInt({ min: 0 })
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

    // Only professionals can apply
    if (req.user.role !== 'professional') {
      return res.status(403).json({
        success: false,
        message: 'Only professionals can apply for projects'
      });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    if (project.status !== 'requested') {
      return res.status(400).json({
        success: false,
        message: 'Project is not available for applications'
      });
    }

    // This would create an application record
    // For now, just return success
    res.json({
      success: true,
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Apply for project error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
