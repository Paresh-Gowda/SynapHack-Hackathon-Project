const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { users } = require('../mockData');

// Login (works with demo accounts)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // 🔍 Debug log
  console.log("Login attempt:", email, password);

  // Find user
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name },
    process.env.JWT_SECRET || "secret",
    { expiresIn: '12h' }
  );

  res.json({ token, user });
});

module.exports = router;
