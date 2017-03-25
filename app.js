'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _cowsay = require('cowsay');

var _cowsay2 = _interopRequireDefault(_cowsay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//Old school Promise
var getUsers = function getUsers(n) {
    return (0, _nodeFetch2.default)('https://api.github.com/users?since=' + n, {
        method: 'get'
    });
};

var say = function say(text) {
    console.log(_cowsay2.default.say({
        text: text,
        e: "o -",
        T: "U"
    }));
};

/* Using async context for enable await keyword */
_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var response1, data1, response2, data2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return getUsers(10);

                case 3:
                    response1 = _context.sent;
                    _context.next = 6;
                    return response1.json();

                case 6:
                    data1 = _context.sent;
                    _context.next = 9;
                    return getUsers(20);

                case 9:
                    response2 = _context.sent;
                    _context.next = 12;
                    return response2.json();

                case 12:
                    data2 = _context.sent;


                    if (Array.isArray(data1) && Array.isArray(data2)) {
                        if (data1.length > data2.length) {
                            say("data1 is larger that data2 and i notice in a very synchronous way!");
                        } else {
                            say("data2 is larger that data1 and i notice in a very synchronous way!");
                        }
                    } else {
                        say("There is data response that is not an Array.");
                    }
                    _context.next = 19;
                    break;

                case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](0);

                    say("We have an error Houston...");

                case 19:
                    _context.prev = 19;

                    say("Everything gone fine... Stage 0 is't like they said...");
                    return _context.finish(19);

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[0, 16, 19, 22]]);
}))();