const express = require('express');
const router = express.Router();

const {createProduct , getProduct} = require('../controllers/product.controller');

const {isLoggedIn , isAdmin} = require('../middlewares/authMiddleware');

// Route to create a new product
router.post('/create', isLoggedIn, isAdmin, createProduct);
router.get('/:id', getProduct);

module.exports = router;
