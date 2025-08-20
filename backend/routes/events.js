const express = require('express');
const router = express.Router();
const { events } = require('../mockData');

// Get events
router.get('/', (req,res)=>{
  res.json(events);
});

module.exports = router;
