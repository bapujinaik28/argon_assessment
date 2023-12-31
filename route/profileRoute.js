
// profileRoute.js
const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');

router.post('/', profileController.createProfile);

module.exports = router;
