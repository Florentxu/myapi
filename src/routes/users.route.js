const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');
const userValidationSchema = require('../middlewares/validators/users.validator');

router.post('/users', userValidationSchema, user.create);
router.get('/users', verifyToken, user.find);
router.get('/users/:id', verifyToken ,user.findOne);
router.post('/users/update/:id',verifyToken, user.update);
router.post('/users/adminUpdate/:id',verifyToken, user.adminUpdate);
router.get('/users/delete/:id',verifyToken, user.delete);

router.post('/users/login', user.login);
module.exports = router;