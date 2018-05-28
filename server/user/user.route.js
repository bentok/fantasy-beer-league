const express = require('express');

const router = express.Router();
const User = require('./user');

router.post('/user/create', (req, res) => {
  User.create(req.body).then(data => res.json(data));
});
router.post('/user/login', (req, res) => {
  User.login(req.body).then(data => res.json(data));
});

module.exports = router;
