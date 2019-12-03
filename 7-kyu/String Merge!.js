function stringMerge(string1, string2, letter){
  return  string1.split(letter, 1) + string2.substr(string2.indexOf(letter))
}
