"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var cors = require('cors');

var app = (0, _express["default"])();

var apiRouter = require('../routes');

var bodyParser = require('body-parser');

exports.start = function () {
  var port = process.env.PORT; //middlewares

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/api/v1', apiRouter);
  app.listen(port, function (err) {
    if (err) {
      console.log("Error : ".concat(err));
      process.exit();
    }

    console.log("app is running on port ".concat(port));
  });
};