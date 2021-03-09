"use strict";

var Product = require("../models/product.model");

exports.create = function (req, res) {
  var product = new Product({
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    img: req.body.img
  });
  product.save().then(function (data) {
    res.send({
      product: data,
      confirmed: true
    });
  })["catch"](function (err) {
    console.log(err.message);
    res.status(500).send({
      error: 500,
      message: err.message || "Une erreur c'est produite lors de la création"
    });
  });
};

exports.find = function (req, res) {
  Product.find().then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.findOne = function (req, res) {
  Product.findById(req.params.id).then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};