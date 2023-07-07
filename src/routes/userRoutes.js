const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/:userId', userController.getUserProfile);
router.put('/users/:userId', userController.updateUserProfile);

module.exports = router;
