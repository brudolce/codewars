function count (string) {  
  const result = {};
  for (i of string) {
    result[i]=(result[i]||0) +1
  }
  return result;
}
