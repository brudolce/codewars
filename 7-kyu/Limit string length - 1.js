function solution(string,limit){
  return string.length <= limit ? string : string.substring(0,limit) + '...'    
}
