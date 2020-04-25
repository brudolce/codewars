var compose = function() {
  let fns = Array.prototype.slice.call(arguments);
  let res=fns[0];
  
  for(let i=1; i<fns.length;i++){
    res=fns[i](res)
  }
 return res
}
