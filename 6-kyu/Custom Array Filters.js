Array.prototype.even = function(){
  return this.filter((e)=>e%2===0 && Number.isInteger(e))
}

Array.prototype.odd = function(){
  return this.filter((e)=>e%2===1 && Number.isInteger(e))
}

Array.prototype.under = function(x){
  return this.filter((e)=>e<x && Number.isInteger(e))
}

Array.prototype.over = function(x){
  return this.filter((e)=>e>x && Number.isInteger(e))
}

Array.prototype.inRange = function(min,max){
  return this.filter((e)=>e>=min && e<=max && Number.isInteger(e))
}
