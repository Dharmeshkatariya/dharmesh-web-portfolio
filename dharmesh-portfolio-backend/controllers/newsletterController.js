const Newsletter = require('../models/Newsletter');
const { sendNewsletterWelcome } = require('../utils/emailService');

// Subscribe to newsletter
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    
    // Check if already subscribed
    let subscriber = await Newsletter.findOne({ email });
    
    if (subscriber) {
      if (subscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: 'Email already subscribed!'
        });
      } else {
        // Reactivate subscription
        subscriber.isActive = true;
        subscriber.unsubscribedAt = null;
        await subscriber.save();
        
        return res.json({
          success: true,
          message: 'Welcome back! You have been resubscribed.'
        });
      }
    }
    
    // Create new subscriber
    subscriber = new Newsletter({
      email,
      ipAddress
    });
    
    await subscriber.save();
    
    // Send welcome email
    sendNewsletterWelcome(email);
    
    res.status(201).json({
      success: true,
      message: 'Subscribed successfully! Check your email for confirmation.'
    });
    
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already subscribed!'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again.'
    });
  }
};

// Unsubscribe from newsletter
const unsubscribe = async (req, res) => {
  try {
    const { email } = req.params;
    
    const subscriber = await Newsletter.findOne({ email });
    
    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our records.'
      });
    }
    
    subscriber.isActive = false;
    subscriber.unsubscribedAt = Date.now();
    await subscriber.save();
    
    res.json({
      success: true,
      message: 'Unsubscribed successfully.'
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe. Please try again.'
    });
  }
};

// Get all subscribers (admin only)
const getAllSubscribers = async (req, res) => {
  try {
    const { isActive, page = 1, limit = 50 } = req.query;
    
    const query = {};
    if (isActive !== undefined) query.isActive = isActive === 'true';
    
    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const total = await Newsletter.countDocuments(query);
    
    res.json({
      success: true,
      data: subscribers,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  subscribe,
  unsubscribe,
  getAllSubscribers
};