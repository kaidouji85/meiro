function meiro(spec,my){
    var that = {};
    var WIDTH = 11;
    var HEIGHT = 11;
    var meiroData = spec;
    var houmonZumi = new Array(WIDTH*HEIGHT);
    
    for(var i=0; i<houmonZumi.length; i++){
        houmonZumi[i] = 0;
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
            if(canSearch(pos+searchDir[i])){
                if(searchPath(pos+searchDir[i])){
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
    
    that.drawPos = function(pos) {
        for(var i=0; i<HEIGHT; i++){
            var line = '';
            for(var j=0; j<WIDTH; j++){
                var nowPos =j+i*HEIGHT;
                line += nowPos===pos ? 'P' : meiroData[j+i*HEIGHT];
            }
            console.log(line);
        }  
    };
    
    return that;
}

module.exports = meiro;