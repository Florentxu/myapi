const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');
const userValidationSchema = require('../middlewares/validators/users.validator');

router.post('/users', userValidationSchema, user.create);
router.get('/users/:id', verifyToken ,user.find);
router.post('/users/update/:id', user.update);
router.post('/users/delete/:id', user.delete);

router.post('/users/login', user.login);
module.exports = router;