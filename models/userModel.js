const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true },
  { $position: 0 }
);

//! static sigu up method
userSchema.statics.signUp = async function (
  userName,
  phone,
  email,
  password,
  isAdmin
) {
  // check existing email
  const duplicateEmail = await this.findOne({ email: email });
  if (duplicateEmail) {
    throw new Error("sorry email already in used");
  }
  // password hashing
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);

  // create user
  const newUser = await this.create({
    userName,
    phone,
    email,
    password: hashPass,
    isAdmin,
  });
  return newUser;
};

// ! static login method
userSchema.statics.login = async function (email, password) {
  // check email and password are valid
  const validUser = await this.findOne({ email: email });
  if (!validUser) {
    throw new Error("invalid action");
  }
  const checkPass = await bcrypt.compare(password, validUser.password);
  if (!checkPass) {
    throw new Error("invalid action");
  }

  return validUser;
};

module.exports = mongoose.model("users", userSchema);
