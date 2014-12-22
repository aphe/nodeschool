var net = require('net')
var server = net.createServer(function (socket) {
    var date = new Date();
    var day_nya = date.toISOString().replace(/T.+/, ' ')
    var time = date.getHours() + ":" + date.getMinutes();
    socket.write(day_nya + time);
    socket.end();
})
server.listen(process.argv[2]);

/*official solution
 var net = require('net')

 function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
 }

 function now () {
 var d = new Date()
 return d.getFullYear() + '-'
 + zeroFill(d.getMonth() + 1) + '-'
 + zeroFill(d.getDate()) + ' '
 + zeroFill(d.getHours()) + ':'
 + zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))

 */