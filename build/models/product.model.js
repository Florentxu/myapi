"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  img: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Product', productSchema);