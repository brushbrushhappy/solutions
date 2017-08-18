function IsPermutation(x,y) {
    // assuming we only consider ascii  character set
    if(x.length != y.length){
        return false;
    }
    var countingArray =[];
    for(var i = 0; i<128;i++){
        countingArray.push(0);
    } 
    for (var i = 0, len = x.length; i < len; i++) {
        var n = x.charCodeAt(i);
        countingArray[n] = countingArray[n] + 1;
    }
    for (var i = 0, len = y.length; i < len; i++) {
        var n = y.charCodeAt(i);
        countingArray[n] = countingArray[n] - 1;
        if(countingArray[n] < 0){
            return false;
        }
    }
    return true;
}