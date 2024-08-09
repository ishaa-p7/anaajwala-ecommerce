const express = require('express')
const {createCart , udpateCart , getCart} = require( '../controllers/cart.controller.js');
const { isLoggedIn } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/create' , createCart);
router.post('/:id' , udpateCart);
router.get('/:id' , getCart);

module.exports = router