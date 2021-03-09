const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.post('/order', order.createOrder);

router.get('/order', order.getOrders);
router.get('/order/:id', order.getOrder);

module.exports = router;