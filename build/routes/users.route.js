"use strict";

var express = require('express');

var router = express.Router();

var user = require('../controllers/users.controller');

var verifyToken = require('../middlewares/verifyToken');

var userValidationSchema = require('../middlewares/validators/users.validator');

router.post('/users', userValidationSchema, user.create);
router.get('/users/:id', verifyToken, user.find);
router.post('/users/login', user.login);
module.exports = router;