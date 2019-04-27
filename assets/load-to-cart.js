"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = console;
          _context.next = 3;
          return new Promise(function (res) {
            return res("Hello, world!");
          });

        case 3:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

$(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  var params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, data;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          params = window.location.hash.toString().replace("#", "").split(",").map(function (x) {
            return x.split(":");
          }).map(function (x) {
            return {
              id: x[0],
              quantity: x[1] ? parseInt(x[1]) : 1
            };
          });
          _context2.prev = 1;
          _context2.next = 4;
          return $.ajax({
            url: "/cart/clear.js",
            dataType: "json"
          }).promise();

        case 4:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 7;
          _iterator = params[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 16;
            break;
          }

          data = _step.value;
          _context2.next = 13;
          return $.ajax({
            url: "/cart/add.js",
            data: data,
            dataType: "json"
          }).promise();

        case 13:
          _iteratorNormalCompletion = true;
          _context2.next = 9;
          break;

        case 16:
          _context2.next = 22;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 22:
          _context2.prev = 22;
          _context2.prev = 23;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 25:
          _context2.prev = 25;

          if (!_didIteratorError) {
            _context2.next = 28;
            break;
          }

          throw _iteratorError;

        case 28:
          return _context2.finish(25);

        case 29:
          return _context2.finish(22);

        case 30:
          window.location.href = "/cart";
          _context2.next = 36;
          break;

        case 33:
          _context2.prev = 33;
          _context2.t1 = _context2["catch"](1);
          console.log("error", _context2.t1);

        case 36:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[1, 33], [7, 18, 22, 30], [23,, 25, 29]]);
})));