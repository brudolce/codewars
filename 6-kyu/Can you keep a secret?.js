function createSecretHolder(secret) {
  const obj = {
    getSecret: function() { return secret; },
    setSecret: function(x) { secret = x; }
  }  
  return obj
}
