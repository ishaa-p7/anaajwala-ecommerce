const express = require('express')
const {  getUser , profile , getOrders ,updateUser} = require('../controllers/user.controller.js')
const { isLoggedIn } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/profile', isLoggedIn,profile)
router.post('/profile/update', isLoggedIn, updateUser)
router.get('/orders', isLoggedIn ,  getOrders)
router.get('/:id', getUser)

module.exports =  router;