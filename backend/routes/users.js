/** Routes for users. */

const express = require("express");
const router = new express.Router();
const Passage = require("@passageidentity/passage-node");

const User = require("../models/user");

/** GET /users/:userId => { user }
 * Returns { id, username, first_name, last_name, img_url}
 * Authorization required: 1Password Passage?
 */

router.get("/:userId", async function (req, res, next) {
  try {
    const user = await User.get(req.params.userId);
    return res.json({ user });

  } catch(err) {
    return next(err);
  }
})


/** GET /users/:userId/tasks => { userTasks }
 * Returns { id, username, task, status }
 * Authorization required: 1Password Passage?
 */

router.get("/:userId/tasks", async function (req, res, next) {
  try {
    const userTasks = await User.getUserTasks(req.params.userId);
    return res.json({ userTasks });

  } catch(err) {
    return next(err);
  }
})


/** POST /users/:userId/tasks => { newTask }
 * Data body to include { taskId }
 * Returns { user_id, username, task_id, task, status }
 * Authorization required: 1Password Passage?
 */

router.post("/:userId/tasks", async function (req, res, next) {
  try {
    const newTask = await User.addTask(req.params.userId, req.body.taskId);
    return res.json({ newTask });

  } catch(err) {
    return next(err);
  }
})

/** PATCH /users/:userId/tasks => { editTask }
 * Data body to include { taskId, status }
 * Returns { user_id, task_id, status }
 * Authorization required: 1Password Passage?
 */

router.patch("/:userId/tasks", async function (req, res, next) {
  try {
    const editTask = await User.editTask(req.params.userId, req.body.taskId, req.body.status);
    return res.json({ editTask });

  } catch(err) {
    return next(err);
  }
})

// const passage = new Passage({
//   appID: process.env.PASSAGE_APP_ID,
//   apiKey: process.env.PASSAGE_API_KEY,
//   authStrategy: "HEADER",
// });

// app.post("/auth", async (req, res) => {
//   try {
//     const userID = await passage.authenticateRequest(req);
//     if (userID) {
//       // user is authenticated
//       const { email, phone, } = await passage.user.get(userID);
//       const identifier = email ? email : phone;

//       res.json({
//         authStatus: "success",
//         identifier,
//       });
//     }
//   } catch (e) {
//     // authentication failed
//     console.log(e);
//     res.json({
//       authStatus: "failure",
//     });
//   }
// });


module.exports = router;