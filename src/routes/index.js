const express = require('express');
const router = express.Router();

const userRouter = require('./users.route');
const productRouter = require('./products.route');
const orderRouter = require('./orders.route');
const categoryRouter = require('./categories.route')
const checkoutRouter = require('./checkout.route');

router.use(checkoutRouter);
router.use(categoryRouter);
router.use(productRouter);
router.use(userRouter);
router.use(orderRouter);

module.exports = router;