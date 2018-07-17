"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserImageSchema = new Schema({
  name: {
    type: String,
    required: "Please enter the name of the book"
  },
  code: {
    type: String,
    required: "Please enther the unique code"
  },
  image: {
    data: Buffer,
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserImage", UserImageSchema);
