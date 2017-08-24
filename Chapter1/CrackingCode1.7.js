// this is from the web https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// confused about the topic, did some search, still confused = =
function rotateMatrix(matrix){
    var n = matrix.length;
    for(var i = 0; i<n/2; i++){
        for (var j = 0; j < Math.ceil(n/2); j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = temp;
        }
    }
    return matrix;
}