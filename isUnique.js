function IsUnique(x) {
    // assuming we only consider ascii  character set
    var countingArray =[];
    for(var i = 0; i<128;i++){
        countingArray.push(0);
    }   
    for (var i = 0, len = x.length; i < len; i++) {
        var n = x.charCodeAt(i);
        countingArray[n] = countingArray[n] + 1;
        if(countingArray[n] > 1){
            return false;
        }
    }
    return true;
}