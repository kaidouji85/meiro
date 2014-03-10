var fs = require('fs');
var readFile = process.argv[2];

console.log('入力：');
var fs = require('fs');
var readline = require('readline');
var rs = fs.ReadStream(readFile);
var rl = readline.createInterface({'input': rs, 'output': {}});
rl.on('line', function (line) {
    console.log(line.trim());
});
rl.resume();


console.log('判定：');
