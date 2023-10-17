/** to set up database locally, run the following in the terminal: */
-- psql < mindmatters.sql

DROP DATABASE IF EXISTS mindmatters;
CREATE DATABASE mindmatters;
\c mindmatters

\i db_schema.sql
\i seed.sql 


/** Test database set up. */
-- DROP DATABASE IF EXISTS mindmatters_test;
-- CREATE DATABASE mindmatters_test;
-- \c mindmatters_test

-- \i schema.sql

