var b = require('./b');

var a = function () {
    console.log('b should be 5 -> ', b);
    var button = document.getElementById('lazyLoad');
    button.addEventListener('click', function() {
        loadjs(['./c'], function(late) {
            console.log(late());
        });
    });
};

module.exports = a;
