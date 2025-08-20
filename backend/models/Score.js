const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  submission: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission' },
  judge: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scores: {
    innovation: Number,
    functionality: Number,
    scalability: Number,
    presentation: Number
  },
  total: Number,
  feedback: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', ScoreSchema);
