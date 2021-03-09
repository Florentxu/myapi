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
    email: req.body.email,
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
}; // id brut :602aa71155607397f07d5a3d


exports.find = function (req, res) {
  User.findById(req.params.id).populate('orders').then(function (data) {
    if (!data) {
      res.status(404).send({
        message: "User with id ".concat(req.params.id, " not found")
      });
    } // let headerToken = req.headers.authorization;
    // if (!headerToken){
    //     res.status(401).send({
    //         auth: false,
    //         message: "missing token",
    //         token: null
    //     });
    // }
    // let tokenVerify = jwt.verify(token, "supersecret")
    // if (!tokenVerify){
    //     res.status(401).send({
    //         auth:false,
    //         token: null,
    //         message: "no authorized"
    //     })
    // }


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