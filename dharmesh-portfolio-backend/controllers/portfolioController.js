const Portfolio = require('../models/Portfolio');

// Get all portfolio items
const getAllPortfolio = async (req, res) => {
  try {
    const { category, featured } = req.query;
    
    const query = {};
    if (category && category !== 'all') query.category = category;
    if (featured === 'true') query.featured = true;
    
    const items = await Portfolio.find(query).sort({ order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single portfolio item
const getPortfolioById = async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found' });
    }
    
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create portfolio item (admin only)
const createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    
    res.status(201).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update portfolio item (admin only)
const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found' });
    }
    
    res.json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete portfolio item (admin only)
const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    
    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found' });
    }
    
    res.json({ success: true, message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
};