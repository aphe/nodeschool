var fs = require('fs');
var path = require('path')
var buffer = undefined;

function goreadFile (callback) {
	fs.readdir(process.argv[2], function done (err, list) {
		buffer = list
		callback();
	});
}

function ngihui () {
	for (var i = 0; i <= buffer.length; i++){
		if(path.extname(buffer[i]) == "."+process.argv[3]){
			console.log(buffer[i]);
		}
	}
}

goreadFile(ngihui)


/* official solution
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
list.forEach(function (file) {
	if (path.extname(file) === '.' + process.argv[3])
		console.log(file)
	})
})
*/
