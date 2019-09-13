function matrixMultiplication(a, b){
  var res = [];
  var len = a.length;
  for(var i = 0; i < len; i++){
    res[i] = [];
    for(var j = 0; j < len; j++){
      var temp = 0;
      for(var k = 0; k < len; k++){
        temp += a[i][k] * b[k][j];
      }
      res[i][j] = temp; //pushes result of temp to array
    }
  }
  return res;
}
