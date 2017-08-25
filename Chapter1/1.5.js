function oneAway(x, y){
    var diff_length = Math.abs(x.length - y.length);
    if(diff_length > 1){
        return false;
    }
    else{
        if(x == y){
            return true;
        }else{
            var max_length = Math.max(x.length , y.length);
            var xIsLonger = false;
            var sameLength = false;
            var diff_count = 0;
            if(x.length > y.length){
                xIsLonger = true;
            }
            if(x.length === y.length){
            	sameLength = true;
            }
            for (var i = 0; i < max_length; i++) {
                var c_x = x.charCodeAt(i);
                var c_y = y.charCodeAt(i);
                if(c_x != c_y){
                    diff_count++;
                
                if(xIsLonger){
                    var temp_str = x.slice(0, i) + x.slice(i + 1, x.length);
                    x = temp_str;
                }
                else if(sameLength){
                	 var temp_str_x = x.slice(0, i) + x.slice(i + 1, x.length);
                	 var temp_str_y = y.slice(0, i) + y.slice(i + 1, y.length);
                	 x = temp_str_x;
                	 y = temp_str_y;
                }
                	else{
                    var temp_str = y.slice(0, i) + y.slice(i + 1, y.length);
                    y = temp_str;
                }
               max_length = max_length - 1;
            }
            }
            if(diff_count > 1){
            	return false;
            }
        }
        
    }
    return true;
}

module.exports = oneAway;