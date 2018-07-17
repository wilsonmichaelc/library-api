'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter the title of the book'
  },
  author: {
    type: String,
    required: 'Please enther the name of the author'
  },
  isbn: {
    type: String,
    required: 'Please enther the isbn'
  },
  published: {
    type: String,
    required: 'Please provide the puclication date.'
  },
  imageUrl: {
    type: String
  },
  rating: {
    type: Number
  },
  status: {
    type: String,
    default: 'Unread'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Books', BookSchema);