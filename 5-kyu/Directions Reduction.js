let dirReduc = function(arr) {
  let str = arr.join(' ');
  let main = /NORTH\s+SOUTH|SOUTH\s+NORTH|WEST\s+EAST|EAST\s+WEST/;
  while (main.test(str)){
    str = str.replace(main,'');
  }
  return str.split(" ").filter(a=>a);
}
