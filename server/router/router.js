const logger = require('../logger');
const router = require('express').Router();

router.use((req, res, next) => {
  logger.info(`Received request at ${req.originalUrl}`);
  next();
});

router.use(
  '/',
  // Require paths here to register
  require('../breweries/breweries.route'),
  require('../user/user.route'),
  require('../preferences/preferences.route'),
);

module.exports = router;
