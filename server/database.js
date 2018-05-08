const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://adarsh:secret@localhost:5432/books_db';
const db = pgp(connectionString);

module.exports = db;