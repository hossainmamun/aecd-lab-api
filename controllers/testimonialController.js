const testimonialModel = require("../models/testimonialModel.js");
const handleError = (response, statusCode, err) => {
  return response.status(statusCode).json({ err: err.message });
};

//!* crud operation(CRUD)

// ! create testimonial
const create_testimonial = async (req, res) => {
  const content = req.body;
  try {
    const testimonial = await testimonialModel.create(content);
    res.status(201).json(testimonial);
  } catch (error) {
    handleError(res, 401, error);
  }
};

// ! find all testimonial
const find_testimonials = async (req, res) => {
  try {
    const testimonials = await testimonialModel.find({}).sort({ _id: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    handleError(res, 400, error);
  }
};

// ! delete a single testimonial
const delete_testimonial = async (req, res) => {
  const id = req.params.id;
  try {
    const testimonial = await testimonialModel.findByIdAndDelete({ _id: id });
    res.status(200).json(testimonial);
  } catch (error) {
    handleError(res, 400, error);
  }
};

// ! update testimonial
const update_testimonial = async (req, res) => {
  const id = req.params.id;
  const { reviewerName, identity, comments } = req.body;
  try {
    const testimonial = await testimonialModel.findByIdAndUpdate(
      { _id: id },
      { reviewerName, identity, comments },
      { returnOriginal: false }
    );
    res.status(200).json(testimonial);
  } catch (error) {
    handleError(res, 400, error);
  }
};

module.exports = {
  create_testimonial,
  find_testimonials,
  delete_testimonial,
  update_testimonial,
};
