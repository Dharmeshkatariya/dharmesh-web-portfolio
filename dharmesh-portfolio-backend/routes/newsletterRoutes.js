const express = require('express');
const router = express.Router();
const {
  subscribe,
  unsubscribe,
  getAllSubscribers
} = require('../controllers/newsletterController');
const { validateNewsletter } = require('../middleware/validation');

// Public routes
router.post('/subscribe', validateNewsletter, subscribe);
router.delete('/unsubscribe/:email', unsubscribe);

// Admin routes
router.get('/subscribers', getAllSubscribers);

module.exports = router;