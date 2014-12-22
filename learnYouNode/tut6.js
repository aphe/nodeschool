var dul = require('./moduls.js')

dul(process.argv[2], process.argv[3], function (err, listnya) {
    if (!err){
        listnya.forEach(function (file){
            console.log(file);
        })
    } else {
        console.log(err);
    }
});

/*official solution
 var filterFn = require('./solution_filter.js')
 var dir = process.argv[2]
 var filterStr = process.argv[3]

 filterFn(dir, filterStr, function (err, list) {
 if (err)
 return console.error('There was an error:', err)

 list.forEach(function (file) {
 console.log(file)
 })
 })
 */