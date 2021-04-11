"use strict";

var Product = require("../models/product.model");

exports.create = function (req, res) {
  var product = new Product({
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
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

exports.update = function (req, res) {
  Product.findOneAndUpdate({
    _id: req.params.id
  }, {
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    img: req.body.img
  }).then(function (data) {
    res.json({
      message: " produit modifié",
      data: data
    });
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports["delete"] = function (req, res) {
  Product.deleteOne({
    _id: req.params.id
  }).then(function (data) {
    res.json({
      message: " produit supprimer",
      _id: req.params.id
    });
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.find = function (req, res) {
  Product.find().populate('category').then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.findOne = function (req, res) {
  Product.findById(req.params.id).populate('category').then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};