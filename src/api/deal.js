const router = require('express').Router();
const Controller = require('../controller/deal');

// Routes
router.get('/', Controller.getAll);
router.post('/', Controller.post);
router.get('/:id', Controller.getById);
router.put('/:id', Controller.put);
router.delete('/:id', Controller.asyncDelete);

module.exports = router;
