require("dotenv").config();
const userSchema = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

// create token function
const createToken = (id) => {
  const token = jwt.sign({ id }, `${process.env.LAB_UNIQUE_ID}`, {
    expiresIn: "1d",
  });
  return token;
};

// user signup
const userSignUp = async (req, res) => {
  const { userName, phone, email, password, isAdmin } = req.body;
  try {
    const user = await userSchema.signUp(
      userName,
      phone,
      email,
      password,
      isAdmin
    );
    console.log(user);
    const labToken = createToken(user._id);
    res.status(201).json({ userName, email, isAdmin, labToken });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.login(email, password);
    const labToken = createToken(user._id);
    const { userName, isAdmin } = user;
    res.status(200).json({ userName, labToken, isAdmin });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { userSignUp, userLogin };
