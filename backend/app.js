const express = require("express");
const cors = require("cors");
const Passage = require("@passageidentity/passage-node");
const { NotFoundError } = require("./expressErrors");

const app = express();
require("dotenv").config();
const CLIENT_URL = "http://127.0.0.1:5173/";

app.use(cors({
  origin: ['http://127.0.0.1:5173', 'http://localhost:3001'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



/** Handle 404 errors */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: {message, status}
  });
});


module.exports = app; 