var http = require('http');
var through = require('through');

var upper = function (buff) {
    this.queue(buff.toString().toUpperCase());
}

process.stdin.pipe(through(upper)).pipe(process.stdout);
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(upper).pipe(res));
    }
});
server.listen(process.argv[2]);

/* official solution
 var http = require('http');
 var through = require('through');

 var server = http.createServer(function (req, res) {
 if (req.method === 'POST') {
 req.pipe(through(function (buf) {
 this.queue(buf.toString().toUpperCase());
 })).pipe(res);
 }
 else res.end('send me a POST\n');
 });
 server.listen(parseInt(process.argv[2]));
 */