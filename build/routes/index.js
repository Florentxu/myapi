"use strict";

var express = require('express');

var router = express.Router();

var userRouter = require('./users.route');

var productRouter = require('./products.route');

var orderRouter = require('./orders.route');

var categoryRouter = require('./categories.route');

var checkoutRouter = require('./checkout.route');

router.use(checkoutRouter);
router.use(categoryRouter);
router.use(productRouter);
router.use(userRouter);
router.use(orderRouter);
module.exports = router;