const express = require('express');
const routes = express.Router();
const category = require('../controllers/categories.controller');
const router = require('./products.route');

router.post('/category', category.create);

router.get('/category', category.find);
router.get('/category/:id', category.findOne);

module.exports = router;