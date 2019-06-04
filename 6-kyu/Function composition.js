function compose(...funcs) {
  return val => {
    if(funcs.length===0) return val;
    return funcs.reverse().reduce((a,e)=>e(a),val)
  }
}
