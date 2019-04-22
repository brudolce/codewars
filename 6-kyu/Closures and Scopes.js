function createFunctions(n) {
  let callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(x=>i)
  }
  
  return callbacks;
}
