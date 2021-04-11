"use strict";

var _require = require('joi'),
    string = _require.string;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  total: {
    type: Number
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    "default": "En cours"
  }
});
module.exports = mongoose.model('Order', orderSchema);