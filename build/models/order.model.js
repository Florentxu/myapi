"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  total: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
});
module.exports = mongoose.model('Order', orderSchema);