
const path = require('path');

var ROOT = path.resolve(__dirname, '../..');

var root = function(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

module.exports = root;