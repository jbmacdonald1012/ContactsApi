const express = require('express');
const mongodb = require('./database/connect');

const port = process.env.PORT || 3000;

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

mongodb.initializeDatabase((error) => {
  if (error) {
    console.log('Error connecting to database.');
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port ${port}`);
  }
});
