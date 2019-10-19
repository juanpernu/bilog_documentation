const express = require('express');
const morgan = require('morgan');

const documentationRouter = require('./routes/documentationRoutes');

const app = express();

// Middleweares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  req.responseTime = new Date().toISOString();
  next();
});

app.use('/api/v1/documentation', documentationRouter);

module.exports = app;
