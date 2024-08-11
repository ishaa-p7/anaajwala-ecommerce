const express = require('express')
const {  getUser , profile , getOrders } = require('../controllers/user.controller.js')
const { isLoggedIn } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/profile', isLoggedIn,profile)
router.get('/orders', isLoggedIn ,  getOrders)
router.get('/:id', getUser)

module.exports =  router;