"use strict";

var Order = require("../models/order.model");

exports.createOrder = function (req, res) {
  var order = new Order({
    total: req.body.total,
    user: req.body.user,
    products: req.body.products
  });
  order.save().then(function (data) {
    User.findByIdAndUpdate(res.body.user, {
      orders: data._id
    }).then(function () {
      res.send({
        order: data,
        confirmed: true
      });
    });
  })["catch"](function (err) {
    console.log(err.message);
    res.status(500).send({
      error: 500,
      message: err.message || "Une erreur c'est produite lors de la création"
    });
  });
};

exports.getOrder = function (req, res) {
  Order.findById(req.params.id).populate('user').populate('products').then(function (data) {
    console.log(data); // console.log(Order.user.firstName);

    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.getOrders = function (req, res) {
  Order.find().populate('user').populate('products').then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};