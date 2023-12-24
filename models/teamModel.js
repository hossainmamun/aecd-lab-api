const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamMemberImg: {
      type: String,
      require: true,
    },
    teamMemeberName: {
      type: String,
      require: true,
    },
    teamMemberDesignation: {
      type: String,
      require: true,
    },
    teamMemberDegree: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const teamModel = mongoose.model("team", teamSchema);
module.exports = teamModel;
