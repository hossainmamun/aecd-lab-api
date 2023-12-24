const blogModel = require("../models/blogModel.js");

// !* crud operation (CRUD)

// ! create blog
const create_blog = async (req, res) => {
  const content = req.body;
  try {
    const blog = await blogModel.create(content);
    res.status(201).json(blog);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// ! find all blog
const find_blogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).sort({_id: -1});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! find blog by id
const find_blog_by_id = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogModel.findById({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! delete blog
const delete_blog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogModel.findByIdAndDelete({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ! update blog
const update_blog = async (req, res) => {
  const id = req.params.id;
  const { blogImg, blogTitle, blogDetail, publicationDate } = req.body;
  try {
    const blog = await blogModel.findByIdAndUpdate(
      { _id: id },
      { blogImg, blogTitle, blogDetail, publicationDate },
      { returnOriginal: false }
    );
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create_blog,
  find_blogs,
  find_blog_by_id,
  delete_blog,
  update_blog,
};
