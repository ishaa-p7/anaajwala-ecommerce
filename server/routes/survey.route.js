const express = require('express')
const router = express.Router();
const {  saveSurveyData } = require('../controllers/survey.controller.js')
const { isLoggedIn , isAdmin} = require('../middlewares/authMiddleware.js');


router.post('/' , saveSurveyData)

module.exports = router