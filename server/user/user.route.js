const express = require('express');

const router = express.Router();
const User = require('./user');

router.post('/user/create', async (req, res) => {
  res.json(await User.create(req.body));
});
router.post('/user/login', async (req, res, next) => {
  try {
    res.json(await User.login(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
