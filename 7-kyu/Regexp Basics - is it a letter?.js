String.prototype.isLetter = function() {
 const str=this.slice();
 if (str.length!==1) return false;
 if (str.match(/[a-zA-Z]/))return true
  return false
}
