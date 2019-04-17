//russian cool solution
function solution(fullText, searchText){
  return (fullText.match(new RegExp(searchText, 'g')) || []).length;
}


//clever
function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}
