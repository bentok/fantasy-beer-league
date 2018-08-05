const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const { router, errorHandler } = require('./router');
// Connect to DB
require('./db/connection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);
// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// Handle errors
app.use(errorHandler);

module.exports = app;
