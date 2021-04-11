"use strict";

var User = require("../models/user.model");

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var Joi = require("joi");

exports.create = function (req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      ccode: req.body.address.ccode,
      country: req.body.address.country
    },
    password: hashedPassword
  });
  user.save().then(function (data) {
    var userToken = jwt.sign({
      id: data._id
    }, "supersecret", {
      expiresIn: 86400
    });
    res.send({
      token: userToken,
      auth: true
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
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      ccode: req.body.address.ccode,
      country: req.body.address.country
    }
  }).then(function (data) {
    res.json({
      message: " utilisateur modifier",
      data: data
    });
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.adminUpdate = function (req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      ccode: req.body.address.ccode,
      country: req.body.address.country
    },
    isAdmin: req.body.isAdmin
  }).then(function (data) {
    res.json({
      message: " utilisateur modifier",
      data: data
    });
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports["delete"] = function (req, res) {
  User.deleteOne({
    _id: req.params.id
  }).then(function (data) {
    res.json({
      message: " utilisateur supprimer",
      _id: req.params.id
    });
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.find = function (req, res) {
  User.find().populate('orders').then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.findOne = function (req, res) {
  User.findById(req.params.id).populate('orders').then(function (data) {
    if (!data) {
      res.status(404).send({
        message: "User with id ".concat(req.params.id, " not found")
      });
    }

    res.json(data);
  })["catch"](function (err) {
    console.log(err.message);
  });
};

exports.login = function (req, res) {
  User.findOne({
    email: req.body.email
  }).then(function (data) {
    if (!data) {
      return res.status(404).send({
        auth: false,
        token: null,
        message: "pas d'utilisateur reconnu avec ".concat(req.body.email)
      });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, data.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        token: null,
        message: "mot de passe incorrect"
      });
    }

    var userToken = jwt.sign({
      id: data._id
    }, "supersecret", {
      expiresIn: 86400
    });
    res.send({
      auth: true,
      token: userToken
    });
  })["catch"](function (err) {
    res.send(err);
  });
};