const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  familyNumber: { type: Number, required: true },
  location: { type: String, required: true },
  address: { type: String, required: true },
  reference: { type: String },
  concern: { type: String },
  flourPreference: { type: String },
  feedback: { type: String },
  reportCompletedBy: { type: String, required: true },
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey
