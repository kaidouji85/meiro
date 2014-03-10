var assert = require('chai').assert;
var meiro = require('../meiro.js');
describe('meiroクラス', function(){
    it('スタートからゴールまでが1本道である迷路なので到達判定がtrueを返す',function(){
        var Meiro = new meiro([
            "*","*","*","*","*","*","*","*","*","*","*",
            "*","S"," "," "," "," "," "," "," "," ","*",
            "*","#","#","#","#","#","#","#","#"," ","*",
            "*"," "," "," "," "," "," "," ","#"," ","*",
            "*"," ","#","#","#","#","#"," ","#"," ","*",
            "*"," ","#"," "," ","G","#"," ","#"," ","*",
            "*"," ","#"," ","#","#","#"," ","#"," ","*",
            "*"," ","#"," "," "," "," "," ","#"," ","*",
            "*"," ","#","#","#","#","#","#","#"," ","*",
            "*"," "," "," "," "," "," "," "," "," ","*",
            "*","*","*","*","*","*","*","*","*","*","*",

        ]);
        var hantei = Meiro.isGoal();
        assert.equal(hantei,true,'到達判定がtrueを返す');
    });
    
    it('スタート位置を正しく判定できる',function(){
          var Meiro = new meiro([
            "*","*","*","*","*","*","*","*","*","*","*",
            "*","S"," "," "," "," "," "," "," "," ","*",
            "*","#","#","#","#","#","#","#","#"," ","*",
            "*"," "," "," "," "," "," "," ","#"," ","*",
            "*"," ","#","#","#","#","#"," ","#"," ","*",
            "*"," ","#"," "," ","G","#"," ","#"," ","*",
            "*"," ","#"," ","#","#","#"," ","#"," ","*",
            "*"," ","#"," "," "," "," "," ","#"," ","*",
            "*"," ","#","#","#","#","#","#","#"," ","*",
            "*"," "," "," "," "," "," "," "," "," ","*",
            "*","*","*","*","*","*","*","*","*","*","*",

        ]);
        var pos = Meiro.getStartPos();
        assert.equal(pos,12,'到達判定がtrueを返す');      
    });
});