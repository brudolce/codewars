function sqInRect(lng, wdth){
  if (lng === wdth) return null

  let result = [];

  while(lng !== wdth) {
    if(lng > wdth){
      result.push(wdth);
      lng -= wdth;
    } else {
      result.push(lng);
      wdth -= lng;
    }
  }
    result.push(result[result.length-1])
    
    return result;
}
