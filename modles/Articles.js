const mongoose = require("mongoose");

const articlesSchemas = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    keywords: {
      type: String,
    },
    status:{
      type: String,
      enum: ["Approved", "Rejected", "Submitted", "Pending"],
      default: "Pending"
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // required: true,
    },
  },
  { timestamps: true }
);

articlesSchemas.virtual("author", {
  ref: "users",
  localField: "_id",
  foreignField: "createdBy",
});

articlesSchemas.virtual("editor", {
  ref: "email",
  localField: "_id",
  foreignField: "approvedBy",
});

const Articles = mongoose.model("Articles", articlesSchemas);

module.exports = Articles;
