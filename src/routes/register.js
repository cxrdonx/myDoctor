const express = require('express');
const router = express();
const userController = require('../controllers/userController');

router.get('/register', userController.list);

module.exports = router;    