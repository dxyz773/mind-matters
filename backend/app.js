const express = require("express");
const cors = require("cors");
require("dotenv").config();


const { NotFoundError } = require("./expressErrors");
const usersRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const tasksRoutes = require("./routes/tasks");

const app = express();

// const CLIENT_URL = "http://127.0.0.1:5173/";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tasks", tasksRoutes);

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