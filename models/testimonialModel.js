const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    reviewerName: {
      type: String,
      require: true,
    },
    identity: {
      type: String,
      require: true,
    },
    comments: {
      type: String,
      require: true,
    },
  },
    { timestamps: true }
);

const testimonialModel = mongoose.model("testimonial", testimonialSchema);
module.exports = testimonialModel;
