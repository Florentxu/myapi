const express = require('express');
const router = express.Router();
const category = require('../controllers/categories.controller');

router.post('/category', category.create);
router.post('/category/update/:id', category.update); 

router.get('/category', category.find);
router.get('/category/:id', category.findOne);

module.exports = router;