const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: {
      type: String,
      require: true,
    },
    serviceDetail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("service", serviceSchema);
