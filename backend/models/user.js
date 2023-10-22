const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressErrors");

class User {

/** Check if user exists or register user with data. Email provided by user will be stored as username.
    Returns { id, username, first_name, last_name} 
*/

static async checkExistOrRegister(username, firstName, lastName) {
  const duplicateCheck = await db.query(`
    SELECT id, username, first_name AS "firstName", last_name AS "lastName"
    FROM users
    WHERE username = $1`,
    [username]
  );

  if (duplicateCheck.rows[0]) {
    let existingUser = duplicateCheck.rows[0];
    return existingUser;
  }

  const result = await db.query(`
    INSERT INTO users
      (username, first_name, last_name)
    VALUES ($1, $2, $3)
    RETURNING id, username, first_name AS "firstName", last_name AS "lastName"`,
    [username, firstName, lastName]
  )
  
  const user = result.rows[0];

  return user;
}

/** Get a single user.
    Returns { id, username, first_name, last_name, img_url }
    Throws NotFoundError if user not found.
*/

static async get(userId) {
  const result = await db.query(`
    SELECT u.id, username, first_name, last_name, img_url
    FROM users u
    WHERE id = $1`, [userId]);

    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user id: ${userId}`);

    return user;
}

/** Get a user's tasks.
    Returns { user_id, username, task_id, task, status }
*/

static async getUserTasks(userId) {
  const result = await db.query(`
    SELECT u.id AS user_id, username, ut.task_id, task, status
    FROM users u
    JOIN user_task ut
    ON u.id = ut.user_id
    JOIN tasks t
    ON ut.task_id = t.id
    WHERE u.id = $1`, [userId]);

    return result.rows;
}

/** Add a task for a user.
    Returns { user_id, task_id, status }
*/

static async addTask(user_id, task_id, status=false) {
  const result = await db.query(`
    INSERT INTO user_task (user_id, task_id, status)
    VALUES ($1, $2, $3)
    RETURNING user_id, task_id, status`, 
    [user_id, task_id, status])

  return result.rows[0];
}

/** Edit the task status for a user: false for incomplete or true for complete.
    Returns { user_id, task_id, status }
*/

static async editTask(user_id, task_id, status) {
  const result = await db.query(`
    UPDATE user_task 
    SET status = $3
    WHERE user_id = $1 
    AND task_id = $2
    RETURNING user_id, task_id, status`, 
    [user_id, task_id, status])

  return result.rows[0];
}


}

module.exports = User;