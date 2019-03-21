function swap(st){
   return st.split('').map(ele => {
    if (/[aeiou]/g.test(ele)) return ele.toUpperCase();
    return ele
  }).join('')  
}
