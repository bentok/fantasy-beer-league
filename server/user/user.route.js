const express = require('express');

const router = express.Router();
const User = require('./user');

router.post('/user', (req, res) => {
  User.create(req.body).then(data => res.json(data));
});
router.get('/user', (req, res) => {
  User.find().then(data => res.json(data));
});

module.exports = router;
