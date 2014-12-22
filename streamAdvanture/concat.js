var concat = require('concat-stream');

var zig_zag = function (buff) {
    var buf = buff.toString().split('').reverse().join('');
    console.log(buf);
}
process.stdin.pipe(concat(zig_zag));

/* official solution
 var concat = require('concat-stream');

 process.stdin.pipe(concat(function (src) {
 var s = src.toString().split('').reverse().join('');
 console.log(s);
 }));

 */