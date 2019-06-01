function uefaEuro2016([t1,t2], [s1,s2]){
  if (s1==s2) return `At match ${t1} - ${t2}, teams played draw.`
  if (s2>s1) return `At match ${t1} - ${t2}, ${t2} won!`
  if (s2<s1) return `At match ${t1} - ${t2}, ${t1} won!`
}
