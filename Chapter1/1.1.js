function isUniqueChars(str){
  checker = 0;
  for ( i = 0; i < str.length; i++ ){
    value = str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
    if ((checker & (1 << value)) > 0){
      return false;
    }
    checker = checker | (1 << value);
  }
  return true;
}

module.exports = isUniqueChars;
