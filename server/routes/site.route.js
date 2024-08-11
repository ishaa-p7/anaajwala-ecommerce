const express = require('express')
const {getInfo} = require( '../controllers/site.controller.js');
const { isLoggedIn  , isAdmin} = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/info' , isLoggedIn , isAdmin , getInfo)

module.exports = router