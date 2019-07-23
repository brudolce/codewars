function scoreTest(str, right, omit, wrong){
  return str.map(v=>v===0?right:v===1?omit:-wrong).reduce((a,b)=>a+b,0)
}
