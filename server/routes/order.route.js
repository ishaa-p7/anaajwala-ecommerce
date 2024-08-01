const express = require('express')
const {createOrder} = require( '../controllers/order.controller.js');
const { isLoggedIn  } = require('../middlewares/authMiddleware.js');

const router = express.Router();


router.post('/create' , isLoggedIn , createOrder)


module.exports = router