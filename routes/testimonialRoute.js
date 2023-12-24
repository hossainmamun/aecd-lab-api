const express = require("express");
const testimonialRoute = express.Router();
const {
  create_testimonial,
  find_testimonials,
    delete_testimonial,
  update_testimonial
} = require("../controllers/testimonialController.js");
const { testimonialValidation } = require("../validations/schemaValidation.js");
const validation = require("../middleware/validationMiddleware.js");

testimonialRoute.post(
  "/create_testimonial",
  validation(testimonialValidation),
  create_testimonial
);
testimonialRoute.get("/all_testimonial", find_testimonials);
testimonialRoute.delete("/delete_testimonial/:id", delete_testimonial);
testimonialRoute.patch("/update_testimonial/:id", update_testimonial);

module.exports = testimonialRoute;
