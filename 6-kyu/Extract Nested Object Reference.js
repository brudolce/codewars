Object.prototype.hash = function(string) {
  let parts = string.split('.' )
  let property = this    
    for (let i of parts) {
      property = property[i] || false;
    }
  return property ? property : undefined
}

//smart ass
Object.prototype.hash = function(string) {
  var arr = string.split('.');
  return arr.reduce(function(pv, cv){
    return (pv) ? pv[cv] : pv;
  }, this);
}
