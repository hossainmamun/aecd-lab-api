const express = require("express");
const blogRouter = express.Router();
const {
  create_blog,
  find_blogs,
  find_blog_by_id,
  delete_blog,
  update_blog,
} = require("../controllers/blogController.js");
const validation = require("../middleware/validationMiddleware.js");
const { blogValidation } = require("../validations/schemaValidation.js");

blogRouter.post("/create_blog", validation(blogValidation), create_blog);
blogRouter.get("/all_blogs", find_blogs);
blogRouter.get("/single_blog/:id", find_blog_by_id);
blogRouter.delete("/delete_blog/:id", delete_blog);
blogRouter.patch("/updateg_blog/:id", update_blog);

module.exports = blogRouter;
