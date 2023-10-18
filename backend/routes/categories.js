/** Routes for categories. */

const express = require("express");
const router = new express.Router();

const Category = require("../models/category");


/** GET / => { categories }
 * Returns { categories: [{ id, category, description },...] }
 */

router.get("/", async function (req, res, next) {
  try {
    const categories = await Category.getAll();
    return res.json({ categories });
    
  } catch (err) {
    return next(err);
  }
})



/** GET /:categoryId
 * Returns { tasks: [{ task_id, task, category_id, category },...] }
 */

router.get("/:categoryId", async function (req, res, next) {
  try {
    const { categoryId } = req.params;
    const tasksByCategory = await Category.getAllByCategory(categoryId);
    return res.json({ tasksByCategory });
    
  } catch (err) {
    return next(err);
  }
})


module.exports = router;