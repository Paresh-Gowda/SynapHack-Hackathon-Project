const express = require('express');
const router = express.Router();
const { submissions } = require('../mockData');

// Submit project
router.post('/:eventId', (req,res)=>{
  const { teamName, members, description, github } = req.body;
  const newSub = {
    id: (submissions.length+1).toString(),
    event: req.params.eventId,
    teamName, members, description, github
  };
  submissions.push(newSub);
  res.json(newSub);
});

// List submissions
router.get('/event/:eventId', (req,res)=>{
  res.json(submissions.filter(s => s.event === req.params.eventId));
});

module.exports = router;
