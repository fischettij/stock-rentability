const express = require('express');
const router = express.Router();
const Controller = require('../controller/accountBalance.js');

// Handling GET all
router.get('/', Controller.getAll);

module.exports = router;
