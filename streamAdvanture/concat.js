var concat = require('concat-stream');

var zig_zag = function (buff) {
    buff.toString().reverse();
}

process.stdin.pipe(concat(zig_zag));