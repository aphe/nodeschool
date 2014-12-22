var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();
var through = require('through');

var upper = function (buff) {
    this.queue(buff.toString().toUpperCase());
}

var stream = tr.select('.loud').createStream();
stream.pipe(through(upper)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);

/* official solution
 var trumpet = require('trumpet');
 var through = require('through');
 var tr = trumpet();

 var loud = tr.select('.loud').createStream();
 loud.pipe(through(function (buf) {
 this.queue(buf.toString().toUpperCase());
 })).pipe(loud);

 process.stdin.pipe(tr).pipe(process.stdout);

 */