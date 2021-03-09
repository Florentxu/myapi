"use strict";

var express = require('express');

var router = express.Router();

var order = require('../controllers/order.controller');

router.post('/order', order.createOrder);
router.get('/order', order.getOrders);
router.get('/order/:id', order.getOrder);
module.exports = router;