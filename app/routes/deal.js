const express = require('express');
const router = express.Router();
const Controller = require('../controller/deal');

// Handling GET all
router.get('/', Controller.getAll);
// Handling POST
router.post('/', Controller.post);
// Handling GET by id
router.get('/:id', Controller.getById);
// Handling PUT
router.put('/:id', Controller.put);
// Handling DELETE
router.delete('/:id', Controller.asyncDelete);

module.exports = router;
