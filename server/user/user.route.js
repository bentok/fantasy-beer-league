const express = require('express');

const router = express.Router();
const User = require('./user');

router.use('/user', [
  // TODO: GET /user/account should only return details for logged in user
  //       GET /user/details should return more basic details of any user within one's own league
  router.get('/account', async (req, res, next) => {
    try {
      res.json(await User.getUserAccount({ email: req.query.email, tokenUser: req.user.user }));
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
