"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  price: {
    type: Number
  },
  title: {
    type: String,
    // required: true,
    lowercase: true
  },
  description: {
    type: String,
    // required: true,
    lowercase: true
  },
  img: {
    type: String,
    // required: true,
    lowercase: true
  }
});
module.exports = mongoose.model('Product', productSchema);