var http = require('http')
var fs = require('fs');

var server = http.createServer(function (req, res) {
    stream = fs.createReadStream(process.argv[3]);

    stream.on('open', function(){
        stream.pipe(res);
    })

    stream.on('error', function(err) {
        res.end(err);
    });
});
server.listen(process.argv[2]);

/*official solution
 var http = require('http')
 var fs = require('fs')

 var server = http.createServer(function (req, res) {
 res.writeHead(200, { 'content-type': 'text/plain' })

 fs.createReadStream(process.argv[3]).pipe(res)
 })

 server.listen(Number(process.argv[2]))

 */