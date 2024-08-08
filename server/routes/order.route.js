const express = require('express')
const {createOrder , getOrder} = require( '../controllers/order.controller.js');
const { isLoggedIn  , isAdmin} = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.get('/orders' , isLoggedIn  , isAdmin , getOrder)
router.post('/create' , isLoggedIn , createOrder)


module.exports = router