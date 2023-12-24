const express = require("express");
const heroRouter = express.Router();
const {
  postHero,
  findHero,
  deleteHero,
  updateHero,
  findHeroById,
} = require("../controllers/heroController.js");
const { heroValidation } = require("../validations/schemaValidation.js");
const validation = require("../middleware/validationMiddleware.js");

heroRouter.post("/create_hero", validation(heroValidation), postHero);
heroRouter.get("/get_All_hero", findHero);
heroRouter.get("/get_hero/:id", findHeroById);
heroRouter.delete("/delete_hero/:id", deleteHero);
heroRouter.patch("/update_hero/:id", updateHero);

module.exports = heroRouter;
