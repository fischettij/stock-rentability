const express = require('express');

const app = express();
const morgan = require('morgan'); // Morgan is loggin framework
const bodyParser = require('body-parser');

// Import routes
const dealsRoutes = require('./routes/deal.js')
const creditCards = require('./routes/creditCard.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes which handle requests
app.use('/deals', dealsRoutes);
app.use('/creditCards', creditCards);

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
