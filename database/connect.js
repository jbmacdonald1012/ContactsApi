const dotenv = require('dotenv');

const { MongoClient } = require('mongodb');

dotenv.config();

let _database;

const initializeDatabase = (callback) => {
  if (_database) {
    console.log('Database is already iniialized.');
    return callback(null, _database);
  }
  MongoClient.connect(process.env.MONGO_CONNECTION_STRING)
    .then((client) => {
      _database = client.db('main');
      callback(null, _database);
    })
    .catch((error) => {
      console.log('Error connecting to database.');
      callback(error);
    });
};

const getDatabase = () => {
  if (!_database) {
    throw Error('Database is not initialized.');
  }
  return _database;
};

module.exports = {
  initializeDatabase,
  getDatabase,
};
