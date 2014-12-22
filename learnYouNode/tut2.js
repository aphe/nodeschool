var u = 0;
for (var i = 2; i < process.argv.length; i++) {
	u += Number(process.argv[i])
};
console.log(u);

/*official answer
var result = 0

for (var i = 2; i < process.argv.length; i++)
result += Number(process.argv[i])

console.log(result)
*/
