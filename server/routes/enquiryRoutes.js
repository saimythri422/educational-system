const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

router.get('/', enquiryController.getAllEnquiries);
router.post('/', enquiryController.submitEnquiry);

module.exports = router;
