const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/breweries', (req, res, next) => {
  res.send('getting breweries');
});

module.exports = router;