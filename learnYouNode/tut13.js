var http = require('http');
var url = require('url');
var ggo = null;

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var sm = url.parse(req.url, true);
    var datenya = new Date(sm.query.iso);

    var requestnya = {
        '/api/parsetime' : function () {
            return {
                hour : datenya.getHours(),
                minute : datenya.getMinutes(),
                second : datenya.getSeconds()
            }
        },

        '/api/unixtime' : function () {
            return {
                unixtime : datenya.getTime()
            }
        }
    }

    var itunya = requestnya[sm.pathname];
    res.end(JSON.stringify(itunya(sm)));
});
server.listen(process.argv[2]);


/*official solution
 var http = require('http')
 var url = require('url')

 function parsetime (time) {
 return {
 hour: time.getHours(),
 minute: time.getMinutes(),
 second: time.getSeconds()
 }
 }

 function unixtime (time) {
 return { unixtime : time.getTime() }
 }

 var server = http.createServer(function (req, res) {
 var parsedUrl = url.parse(req.url, true)
 var time = new Date(parsedUrl.query.iso)
 var result

 if (/^\/api\/parsetime/.test(req.url))
 result = parsetime(time)
 else if (/^\/api\/unixtime/.test(req.url))
 result = unixtime(time)

 if (result) {
 res.writeHead(200, { 'Content-Type': 'application/json' })
 res.end(JSON.stringify(result))
 } else {
 res.writeHead(404)
 res.end()
 }
 })
 server.listen(Number(process.argv[2]))

 */