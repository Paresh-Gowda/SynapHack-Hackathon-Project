const express = require('express');
const router = express.Router();
const { scores } = require('../mockData');

// Judge gives score
router.post('/score', (req,res)=>{
  const { submissionId, feedback } = req.body;
  const score = {
    id: (scores.length+1).toString(),
    submissionId,
    total: 30, // mock score
    feedback
  };
  scores.push(score);
  res.json(score);
});

// Get scores for a submission
router.get('/submission/:id', (req,res)=>{
  res.json(scores.filter(s => s.submissionId === req.params.id));
});

module.exports = router;

