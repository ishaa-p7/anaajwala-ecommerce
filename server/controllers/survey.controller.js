const Survey = require('../models/survey.model.js')

const saveSurveyData = async (req, res, next) => {
    try {
        const newSurvey = new Survey(req.body);
        await newSurvey.save();
        res.status(201).json({ message: 'Survey submitted successfully', survey: newSurvey });
    } catch (error) {
        next(error)
    }
}


module.exports = {
    saveSurveyData
}