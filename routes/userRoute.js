const express = require("express");
const route = express.Router();
const validation = require("../middleware/validationMiddleware.js");
const {
  signUpValidation,
  loginValidation,
} = require("../validations/schemaValidation.js");
const { userSignUp, userLogin } = require("../controllers/userController.js");

route.post("/signUp", validation(signUpValidation), userSignUp);
route.post("/login", validation(loginValidation), userLogin);

module.exports = route;
