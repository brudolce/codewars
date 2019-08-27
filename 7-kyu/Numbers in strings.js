function solve(s){
  return s.match(/[0-9]+/g).map(e=>Number(e)).sort((a,b)=>b-a)[0]
};
