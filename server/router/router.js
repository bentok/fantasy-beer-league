const logger = require('../logger/logger');
const router = require('express').Router();

router.use((req, res, next) => {
  logger.info(`Received request at ${req.originalUrl}`);
  next();
});

router.use('/', 
  // Require paths here to register
  require('../breweries/breweries.route'),
  require('../user/user.route'),
);

module.exports = router;