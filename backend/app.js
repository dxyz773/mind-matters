const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressErrors");
const categoriesRoutes = require("./routes/categories");
const tasksRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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