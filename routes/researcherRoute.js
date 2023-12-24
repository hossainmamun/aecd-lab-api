const express = require("express");
const researcherRouter = express.Router();
const validation = require("../middleware/validationMiddleware.js");
const { researcherValidation } = require("../validations/schemaValidation.js");
const {
  create_researcher,
  find_researcher,
  find_researcher_by_id,
  delete_researcher,
  update_researcher,
} = require("../controllers/researcherController.js");

researcherRouter.post(
  "/create_researcher",
  validation(researcherValidation),
  create_researcher
);
researcherRouter.get("/all_researcher", find_researcher);
researcherRouter.get("/single_researcher/:id", find_researcher_by_id);
researcherRouter.delete("/delete_researcher/:id", delete_researcher);
researcherRouter.patch("/update_researcher/:id", update_researcher);

module.exports = researcherRouter;
