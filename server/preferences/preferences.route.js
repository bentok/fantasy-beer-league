const express = require('express');

const router = express.Router();
const Preferences = require('./preferences');

/**
 * Routes for retrieving, creating or updating an entity's preferences
 */
router.use('/preferences', [
  router.get('/', async (req, res, next) => {
    try {
      res.json(await Preferences.get({ email: req.user.email }));
    } catch (error) {
      next(error);
    }
  }),
  router.put('/', async (req, res, next) => {
    const preferences = req.body;
    try {
      res.json(await Preferences.update({ email: req.user.email, preferences }));
    } catch (error) {
      next(error);
    }
  }),
  router.post('/', async (req, res, next) => {
    const preferences = req.body;
    try {
      res.json(await Preferences.create({ email: req.user.email, preferences }));
    } catch (error) {
      next(error);
    }
  }),
]);

module.exports = router;
