var fs = require('fs');
var path = require('path')

function ngihui (listnya, extensionnya) {
  sult = [];
  listnya.forEach(function (file) {
    if (path.extname(file) === '.' + extensionnya)
      sult.push(file);
  })
  return sult;
}

module.exports = function goreadFile (passingannya, extensionnya, callback) {
  fs.readdir(passingannya, function (err, list) {
    if(err){
      callback(err, null);
    } else {
      callback(null, ngihui(list, extensionnya));
    }
  })
}

/* official solution
 var fs = require('fs')
 var path = require('path')

 module.exports = function (dir, filterStr, callback) {

 fs.readdir(dir, function (err, list) {
 if (err)
 return callback(err)

 list = list.filter(function (file) {
 return path.extname(file) === '.' + filterStr
 })

 callback(null, list)
 })
 }


 */