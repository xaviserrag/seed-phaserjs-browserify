var b = require('./b');

var a = function () {
  console.log('b should be 5 -> ', b);
}();

module.exports = a;
