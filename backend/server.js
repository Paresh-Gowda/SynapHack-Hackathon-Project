require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const submissionRoutes = require('./routes/submissions');
const judgingRoutes = require('./routes/judging');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 4000;

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/judging', judgingRoutes);

app.get('/', (req,res)=> res.send('SynapHack platform API running'));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
