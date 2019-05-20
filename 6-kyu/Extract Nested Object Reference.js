Object.prototype.hash = function(string) {
  let parts = string.split('.' )
  let property = this    
    for (let i = 0; i < parts.length; i+=1 ) {
      property = property[parts[i]] || false;
    }
  return property ? property : undefined
}
