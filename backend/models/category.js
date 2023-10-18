const db = require("../db");

class Category {

/** Get all categories.
    Returns [{ id, category, description }, ...]
*/

static async getAll() {
  const result = await db.query(`
    SELECT id, category, description 
    FROM categories`);

  return result.rows;
}

/** Get all tasks by category.
    Returns [{ task_id, task, category_id, category }, ...]
*/
static async getAllByCategory(categoryId) {
  const result = await db.query(`
    SELECT t.id AS task_id, task, category_id, category
    FROM tasks t
    JOIN categories c
    ON t.category_id = c.id
    WHERE c.id = $1`, [categoryId]);

  return result.rows;
}




}

module.exports = Category;