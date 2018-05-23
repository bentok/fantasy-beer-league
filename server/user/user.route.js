const express = require('express');
const router = express.Router();
const User = require('./user');

router.post('/user', (req, res, next) => {
  new User().create(req, res, next);
})
router.get('/user', (req, res, next) => {
  new User().find(req, res, next);
});

module.exports = router;