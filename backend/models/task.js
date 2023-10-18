const db = require("../db");

class Task {

/** Get all tasks.
    Returns [{ task_id, task, category_id, category }, ...]
*/

static async getAll() {
  const result = await db.query(`
    SELECT t.id AS task_id, task, category_id, category
    FROM tasks t
    JOIN categories c
    ON t.category_id = c.id`);

  return result.rows;
}


/** Get all tasks by category.
    Returns [{ task_id, task, category_id, category }, ...]
*/
static async getAllByCategory(categoryID) {
  const result = await db.query(`
    SELECT t.id AS task_id, task, category_id, category
    FROM tasks t
    JOIN categories c
    ON t.category_id = c.id
    WHERE c.id = $1`, [categoryID]);

  return result.rows;
}


}

module.exports = Task;