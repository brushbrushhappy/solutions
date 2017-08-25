function IsPalindromePermutation(x) {
	// asuming we only consider alphabet in this question
	var countingArray =[];
	for(var i = 0; i<128;i++){
		countingArray.push(0);
	} 
	for (var i = 0, len = x.length; i < len; i++) {
		var n = x.charCodeAt(i);
		if((n >= 65 && n<= 90)||(n >= 97 && n<= 122)){
			countingArray[n] = countingArray[n] + 1;
		}
	}
	var oddCount = 0;
	for (var i = 0;i<128; i++) {
		if(countingArray[i] %2 == 1){
			oddCount++;
		}
		if(oddCount>1){
			return false;
		}
	}
	return true;
}
module.exports = IsPalindromePermutation;