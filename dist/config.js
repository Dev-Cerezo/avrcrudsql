"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
console.log(" server on port: ", process.env.DB_PORT);
var _default = {
  port: 4000
};
exports["default"] = _default;