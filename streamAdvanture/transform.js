var through = require('through');

var upper = function (buff) {
  this.queue(buff.toString().toUpperCase());
}

process.stdin.pipe(through(upper)).pipe(process.stdout);

/* official solution

 var through = require('through');
 var tr = through(function (buf) {
 this.queue(buf.toString().toUpperCase());
 });
 process.stdin.pipe(tr).pipe(process.stdout);

 */