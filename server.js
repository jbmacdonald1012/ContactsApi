/* eslint-disable no-undef */
const dotenv = require('dotenv');
const express = require('express');
const mongodb = require('./database/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'))
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongodb.initializeDatabase((error) => {
  if (error) {
    console.log('Error connecting to database.');
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port ${port}`);
  }
});
