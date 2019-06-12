function findSum(...args){
  if (args.map(x=>x<0).includes(true)) return -1;
  return args.reduce((a,b)=>a+b,0)
}
