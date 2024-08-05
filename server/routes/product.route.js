const express = require('express');
const router = express.Router();

const {createProduct} = require('../controllers/product.controller');

const {isLoggedIn , isAdmin} = require('../middlewares/authMiddleware');

// Route to create a new product
router.post('/create', isLoggedIn, isAdmin, createProduct);

module.exports = router;
