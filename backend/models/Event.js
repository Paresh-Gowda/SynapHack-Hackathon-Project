const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  tracks: [String],
  rules: String,
  timeline: Object,
  prizes: [String],
  sponsors: [String],
  isOnline: { type: Boolean, default: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
