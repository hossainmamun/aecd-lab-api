const express = require("express");
const teamRouter = express.Router();
const validation = require("../middleware/validationMiddleware.js");
const { teamValidation } = require("../validations/schemaValidation.js");
const {
  createMember,
  find_all_member,
  find_member_by_id,
  delete_member,
  update_member,
} = require("../controllers/teamController.js");

teamRouter.post("/create_team", validation(teamValidation), createMember);
teamRouter.get("/all_team_member", find_all_member);
teamRouter.get("/team_member/:id", find_member_by_id);
teamRouter.delete("/delete_member/:id", delete_member);
teamRouter.patch("/update_member/:id", update_member);

module.exports = teamRouter;
