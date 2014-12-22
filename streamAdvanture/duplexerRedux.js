
var duplx = require('duplexer');
var through = require('through');
var counts = {};

var find_country = function (ojek) {
    var country = ojek.country;
    counts[country] = (counts[country] || 0) + 1;
}

module.exports = function (counter) {
    //stupid mistake before, i put the read outside the module.exports -_-
    var blah = function () {
        counter.setCounts(counts);
    }

    //through to make write, read stream beside using counter
    return duplx(through(find_country, blah), counter);
};

/* official solution
 var duplexer = require('duplexer');
 var through = require('through');

 module.exports = function (counter) {
 var counts = {};
 var input = through(write, end);
 return duplexer(input, counter);

 function write (row) {
 counts[row.country] = (counts[row.country] || 0) + 1;
 }
 function end () { counter.setCounts(counts) }
 };

 */