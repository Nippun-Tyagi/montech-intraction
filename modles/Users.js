const mongoose = require("mongoose");
const validator = require("validator");

const userSchemas = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter your name"],
      maxlength: [30, "Name can not Exceed 30 Character"],
    },
    email: {
      type: String,
      required: [true, "Please Enter your Email"],
      unique: true,
      validate: [validator.isEmail, "Please enter the Valid Email "],
    },
    type: {
      type: String,
      enum: ["Author", "Editor"],
      required: true,
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchemas);

module.exports = Users;
