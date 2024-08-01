const express = require('express')
const {  getUser , profile } = require('../controllers/user.controller.js')
const { isLoggedIn } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/profile', isLoggedIn,profile)
router.get('/:id', getUser)

module.exports =  router;