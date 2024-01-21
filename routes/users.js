const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('login');
});

router.post('/register', (req, res) => {
  res.send('register');
});

router.get('/current', (req, res) => {
  res.send('current');
});

module.exports = router;
