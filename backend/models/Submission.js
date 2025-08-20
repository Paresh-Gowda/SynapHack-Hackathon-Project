const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  teamName: String,
  members: [String],
  description: String,
  github: String,
  videoUrl: String,
  files: [String],
  round: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
