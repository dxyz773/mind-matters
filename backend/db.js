/** Database setup. */

const { Client } = require("pg");

let DB_URI = `postgresql://`;

if (process.env.NODE_ENV === 'test') {
  DB_URI = `${DB_URI}/mindmatters_test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/mindmatters`;
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;