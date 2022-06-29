const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    hashedPassword: {
      type: String
    },
    type:{
      type: String,
      enum: ["Author", "Editor"],
			required: true,
    }
  },
  { timestamps: true }
);



const Users = mongoose.model("users", userSchemas);

module.exports = Users;
