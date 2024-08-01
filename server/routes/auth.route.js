const express = require('express')
const {signup , signin, google , signOut} = require( '../controllers/auth.controller.js');
const { isLoggedIn } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/signup' , signup)
router.post('/signin' , signin)
// router.post('/google' , google)
router.post('/signout', signOut)

module.exports = router