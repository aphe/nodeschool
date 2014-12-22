var http = require('http');

http.get(process.argv[2], function(res) {
    lala = [];
    res.setEncoding('utf8');
    res.on('data', function (data) {
        lala.push(data);
    })
    res.on('end', function (gogo){
        console.log(lala.join("").length);
        console.log(lala.join(""));
    });
});


/* official answer (using bl)
 var http = require('http')
 var bl = require('bl')

 http.get(process.argv[2], function (response) {
 response.pipe(bl(function (err, data) {
 if (err)
 return console.error(err)
 data = data.toString()
 console.log(data.length)
 console.log(data)
 }))
 })

 */