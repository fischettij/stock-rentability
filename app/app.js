const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const dealsRoutes = require('./routes/deal.js')
const creditCards = require('./routes/creditCard.js')
const accountBalance = require('./routes/accountBalance.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

// Routes which handle requests
app.use('/deals', dealsRoutes);
app.use('/creditCards', creditCards);
app.use('/accountBalance', accountBalance);

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Nof Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
