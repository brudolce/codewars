String.prototype.trim = function() {
  return this.replace(/^\s*/,'').replace(/\s*$/,'');
};

//sol 2
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};
