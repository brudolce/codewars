var FilterNumbers = function(str) {
  return str.split('').filter(c => c.match(/[a-zA-Z]/g)).join('');
}
