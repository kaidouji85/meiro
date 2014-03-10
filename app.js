var fs = require('fs');
var meiro = require('./meiro.js');
var meiroData = new Array();
var fileName = process.argv[2];

console.log(fileName);

console.log('入力：');
meiroData = convertFileToMeiroData(fileName);
var Meiro = meiro(meiroData);
Meiro.drawMeiro();
console.log();

console.log('判定：');
var result = Meiro.isGoal();
console.log(result===true ? '到達可能です' : '到達できません');
console.log();

console.log('経路：');
result===true ? Meiro.drawMeiroRoute() : console.log('なし');
console.log();

/**
 * ファイル内容を迷路データ配列に変換する 
 * @param {String} fileName ファイル名
 * @return {Array} 迷路データ
 */
function convertFileToMeiroData(fileName) {
    var data = new Array();
    fs.readFileSync(fileName).toString().split('\n').forEach(function(line) {
        for (var i = 0; i < 11; i++) {
            data.push(line.trim().charAt(i));
        }
    });
    return data;
}