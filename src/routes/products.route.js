const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controller');


//route qui nécessite une authorisation pour les users de type admin (dans le cas où on frait un back office)
router.post('/products', product.create); 

//sans authorisation
router.get('/products', product.find);
router.get('/products/:id', product.findOne);

module.exports = router;
