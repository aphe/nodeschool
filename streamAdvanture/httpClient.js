var request = require('request');
var _psot = request.post('http://localhost:8000');

process.stdin.pipe(_psot).pipe(process.stdout);

/* official solution
 var request = require('request');
 var r = request.post('http://localhost:8000');
 process.stdin.pipe(r).pipe(process.stdout);

 */