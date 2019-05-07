function capitalize(s,arr){
  return s.split('').map((e, i)=>(arr.includes(i)) ? e.toUpperCase() : e).join('');
};
