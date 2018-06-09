const express = require('express');

const router = express.Router();
const User = require('./user');

router.post('/user/create', async (req, res) => {
  res.json(await User.create(req.body));
});
router.post('/user/login', async (req, res) => {
  res.json(await User.login(req.body));
});

module.exports = router;
