const mongoose   = require('mongoose');
const logger = require('../logger/logger');

// Put Mongoose events in their own file
mongoose.connect('mongodb://localhost:27017/fantasy-beer-league');
mongoose.connection.on('connected',  () => {
  logger.info('Mongoose default connection open to mongodb://localhost:27017/fantasy-beer-league');
}); 
mongoose.connection.on('error', (err) => {
  logger.error(`Mongoose default connection error: ${err}`);
});
mongoose.connection.on('disconnected',  () => {
  logger.info('Mongoose default connection disconnected'); 
});