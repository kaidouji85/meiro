function meiro(spec,my){
    var that = {};
    var WIDTH = 11;
    var HEIGHT = 11;
    var meiroData = spec;
    var houmonZumi = new Array(WIDTH*HEIGHT);
    var keiro = new Array(WIDTH*HEIGHT);
    
    for(var i=0; i<WIDTH*HEIGHT; i++){
        houmonZumi[i] = 0;
        keiro[i] = 0;
    }
    
    
    
    that.isGoal = function(){
        var startPos = that.getStartPos();
        return searchPath(startPos);
    };
    
    function searchPath(pos){
        if(meiroData[pos]==='G'){
            return true;
        }
        houmonZumi[pos] = 1;
        
        var searchDir = [1,-1,HEIGHT,-HEIGHT];
        for(var i in searchDir){
            var nextPos = pos+searchDir[i];
            if(canSearch(nextPos)){
                if(searchPath(nextPos)){
                    keiro[nextPos] = meiroData[nextPos]==='G' ? 0 : 1;
                    return true;
                }
            }
        }
        
        return false;
    }
    
    function canSearch(pos){
        if(pos<=WIDTH*HEIGHT && houmonZumi[pos]===0 &&
             meiroData[pos]!=='#' && meiroData[pos]!=='*'){
            return true;
        }
        return false;
    }
    
    that.getStartPos = function(){
        for(var i=0; i<meiroData.length; i++){
            if(meiroData[i]==='S'){
                return i;
            }
        }
        return -1;
    };
    
    that.drawMeiro = function() {
        for(var i=0; i<HEIGHT; i++){
            var line = '';
            for(var j=0; j<WIDTH; j++){
                var nowPos =j+i*HEIGHT;
                line += meiroData[j+i*HEIGHT];
            }
            console.log(line);
        }  
    };
    
    
    that.drawMeiroRoute = function() {
        for(var i=0; i<HEIGHT; i++){
            var line = '';
            for(var j=0; j<WIDTH; j++){
                var nowPos =j+i*HEIGHT;
                line += keiro[nowPos]===1 ? '+' : meiroData[j+i*HEIGHT];
            }
            console.log(line);
        }          
    };
    

    
    return that;
}

module.exports = meiro;