/** Routes for tasks. */

const express = require("express");
const router = new express.Router();

const Task = require("../models/task");


/** GET / => { tasks }
 * Returns { tasks: [{ task_id, task, category_id, category },...] }
 */

router.get("/", async function (req, res, next) {
  try {
    const tasks = await Task.getAll();
    return res.json({ tasks });
    
  } catch (err) {
    return next(err);
  }
})


module.exports = router;