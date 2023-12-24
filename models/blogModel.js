const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blogImg: {
      type: String,
      require: true,
    },
    blogTitle: {
      type: String,
      require: true,
    },
    blogDetail: {
      type: String,
      require: true,
    },
    publicationDate: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
