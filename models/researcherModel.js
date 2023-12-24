const mongoose = require("mongoose");

const researcherSchema = new mongoose.Schema(
  {
    researcherImg: {
      type: String,
      require: true,
    },
    researcherName: {
      type: String,
      require: true,
    },
    designation: {
      type: String,
      require: true,
    },
    degree: {
      type: String,
      require: true,
    },
    expertise: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const researcherModel = mongoose.model("researcher", researcherSchema);
module.exports = researcherModel;
