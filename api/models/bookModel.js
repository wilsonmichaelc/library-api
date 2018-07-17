'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the book'
  },
  author: {
    type: String,
    required: 'Please enther the name of the author'
  },
  isbn: {
    type: String,
    required: 'Please enther the isbn'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Books', BookSchema);