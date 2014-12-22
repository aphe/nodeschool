var split = require('split');
var through = require('through');

var counter = 0;
var zig_zag = function (buff) {
    counter ++;
    if(counter %2){
        this.queue(buff.toString().toLowerCase() + '\n');
    } else {
        this.queue(buff.toString().toUpperCase() + '\n');
    }
}

process.stdin.pipe(split()).
    pipe(through(zig_zag)).
    pipe(process.stdout);

/* official solution
 var through = require('through');
 var split = require('split');

 var lineCount = 0;
 var tr = through(function (buf) {
 var line = buf.toString();
 this.queue(lineCount % 2 === 0
 ? line.toLowerCase() + '\n'
 : line.toUpperCase() + '\n'
 );
 lineCount ++;
 });
 process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
 */