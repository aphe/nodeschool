var express = require('express');
var app = express();
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extneded: false}));
app.post('/form', function (req, res) {
    var baliknya = req.body.str.split('').reverse().join('');
    res.send(baliknya);
})
app.listen(process.argv[2]);

/* official solution
 var express = require('express')
 var bodyParser = require('body-parser')
 var app = express()

 app.use(bodyParser.urlencoded({extended: false}))

 app.post('/form', function(req, res) {
 res.send(req.body.str.split('').reverse().join(''))
 })

 app.listen(process.argv[2])


 */