function list(names){
    let str = "";
    if (names === undefined) {
        return str;
    } 
    for (let i = 0; i < names.length; i++) {
        if (i >= names.length-2) {
        str += names[i]["name"] + " & "
        } else {
        str += names[i]["name"] + ", ";
        }        
    }
  return str.slice(0, str.length-3);
}
