Object.prototype.hash = function(string) {
  let parts = string.split('.' )
  let property = this    
    for (let i of parts) {
      property = property[i] || false;
    }
  return property ? property : undefined
}
