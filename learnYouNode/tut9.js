var http = require('http');
responses = [];

gogo = process.argv.slice(2);

for (i=0; i<gogo.length; i++) {
    (function (i) {
    http.get(gogo[i], function (res) {
        var response = "";
        res.setEncoding('utf8');
        res.on('data', function (data) {
            response += data;
        })
        res.on('end', function () {
            responses[i] = response;
            var resultCount = 0;
            for (j = 0; j < responses.length; j++) {
                if (responses[j] != null) resultCount++;
            }
            if (resultCount == responses.length) {
                for (j = 0; j < responses.length; j++) {
                    console.log(responses[j]);
                }
            }
        });
    });
    })(i);
};

/*official solution
 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
 for (var i = 0; i < 3; i++)
 console.log(results[i])
 }

 function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
 response.pipe(bl(function (err, data) {
 if (err)
 return console.error(err)

 results[index] = data.toString()
 count++

 if (count == 3) // yay! we are the last one!
 printResults()
 }))
 })
 }

 for (var i = 0; i < 3; i++)
 httpGet(i)

 */