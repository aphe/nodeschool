var fs = require('fs');
var buffer = undefined;

function goreadFile (callback) {
	fs.readFile(process.argv[2], function done (err, content) {
		buffer = content.toString().split('\n');
		callback();
	});
}

function ngihui () {
	console.log(buffer.length - 1);
}

goreadFile(ngihui)

/* official answer
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
	// fs.readFile(file, 'utf8', callback) can also be used
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})
*/
