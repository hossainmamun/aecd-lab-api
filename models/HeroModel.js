const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    heroImage: {
      type: String,
      require: true,
    },
    heroHeader: {
      type: String,
      require: true,
    },
    heroDetail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
  { $position: 0 }
);

module.exports = mongoose.model("heros", heroSchema);
