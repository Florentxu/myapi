"use strict";

var express = require('express');

var router = express.Router();

var userRouter = require('./users.route');

var productRouter = require('./products.route');

var orderRouter = require('./orders.route');

router.use(productRouter);
router.use(userRouter);
router.use(orderRouter);
module.exports = router;