require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Event = require('./models/Event');
const Submission = require('./models/Submission');

async function seed(){
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true });
  console.log('Connected to DB for seeding');

  await User.deleteMany({});
  await Event.deleteMany({});
  await Submission.deleteMany({});

  const p = await User.create({ name: 'Participant', email: 'part@example.com', password: await bcrypt.hash('pass123',10), role: 'participant' });
  const o = await User.create({ name: 'Organizer', email: 'org@example.com', password: await bcrypt.hash('pass123',10), role: 'organizer' });
  const j = await User.create({ name: 'Judge', email: 'judge@example.com', password: await bcrypt.hash('pass123',10), role: 'judge' });

  const ev = await Event.create({ title: 'Demo Hackathon', description: 'Demo event for SynapHack', organizer: o._id });

  const sub = await Submission.create({
    event: ev._id,
    teamName: 'TeamDemo',
    members: ['Participant'],
    description: 'Sample demo submission',
    github: 'https://github.com/',
    files: [],
    round: 1
  });

  console.log('Seed complete: ');
  console.log('Organizer: org@example.com / pass123');
  console.log('Participant: part@example.com / pass123');
  console.log('Judge: judge@example.com / pass123');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
