const express = require('express');

const router = express.Router();
const Preferences = require('./preferences');

router.get('/preferences', async (req, res) => {
  res.json(await Preferences.fetch(req.body));
});
router.put('/preferences', async (req, res) => {
  res.json(await Preferences.update(req.body));
});

module.exports = router;
