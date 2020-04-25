const router = require('express').Router();
const Controller = require('../controller/accountBalance.js');

// Methods
router.get('/', Controller.getAll);

module.exports = router;
