"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var FUNC = require("./").FUNC;



it("fj-noop", function () {
  assert.equal(typeof document, "object");
});