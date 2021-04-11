"use strict";

var express = require('express');

var router = express.Router();

var user = require('../controllers/users.controller');

var verifyToken = require('../middlewares/verifyToken');

var userValidationSchema = require('../middlewares/validators/users.validator');

router.post('/users', userValidationSchema, user.create);
router.get('/users', verifyToken, user.find);
router.get('/users/:id', verifyToken, user.findOne);
router.post('/users/update/:id', verifyToken, user.update);
router.post('/users/adminUpdate/:id', verifyToken, user.adminUpdate);
router.get('/users/delete/:id', verifyToken, user["delete"]);
router.post('/users/login', user.login);
module.exports = router;