var spawn = require('child_process').spawn;
var duplx = require('duplexer');

var blah = function (cmd, args) {
    return duplx(cmd, args);
}

module.exports = function (cmd, args) {
    var child = spawn(cmd, args);
    return blah(child.stdin, child.stdout);
};

/* official solution
 var spawn = require('child_process').spawn;
 var duplexer = require('duplexer');

 module.exports = function (cmd, args) {
 var ps = spawn(cmd, args);
 return duplexer(ps.stdin, ps.stdout);
 };
 */