const express = require('express');

const router = express.Router();
const User = require('./user');

/**
 * Routes for creating, retreiving and updating a user's information
 */

router.use('/user', [
  router.get('/', async (req, res, next) => {
    try {
      res.json(await User.getUserAccount({ email: req.user.email }));
    } catch (error) {
      next(error);
    }
  }),
  router.put('/', async (req, res, next) => {
    const changes = req.body;
    try {
      res.json(await User.update({ email: req.user.email, changes }));
    } catch (error) {
      next(error);
    }
  }),
  router.post('/create', async (req, res, next) => {
    try {
      res.json(await User.create(req.body));
    } catch (error) {
      next(error);
    }
  }),
  router.post('/login', async (req, res, next) => {
    try {
      res.json(await User.login(req.body));
    } catch (error) {
      next(error);
    }
  }),
]);

module.exports = router;
