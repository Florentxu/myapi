const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controller');


//route qui nécessite une authorisation pour les users de type admin (dans le cas où on frait un back office)
router.post('/products', product.create); 
router.post('/products/delete/:id', product.delete); 
router.post('/products/update/:id', product.update); 


//sans authorisation
router.get('/products', product.find);
router.get('/products/:id', product.findOne);

module.exports = router;
