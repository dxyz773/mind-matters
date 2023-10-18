const db = require("../db");

class Category {

/** Get all categories.
    Returns [{ budget_id, amount, category_id }, ...]
*/

static async getAll() {
  const result = await db.query(`
    SELECT id, category, description 
    FROM categories`);

  return result.rows;
}

}

module.exports = Category;