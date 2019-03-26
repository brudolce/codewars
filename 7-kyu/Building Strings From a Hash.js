function solution(pairs){
  let result = '';
  for (key in pairs) {
    result += key + ' = ';
    result += pairs[key] + ','
  }
  return result.replace(/,$/g,'')
}
