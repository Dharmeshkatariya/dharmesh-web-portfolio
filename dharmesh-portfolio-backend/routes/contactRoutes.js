const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');

// Public route
router.post('/', validateContact, submitContact);

// Admin routes (add authentication middleware in production)
router.get('/', getAllContacts);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

module.exports = router;