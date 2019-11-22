function solve(s){
 return s.match(/[aeiou]+/gi).sort((a,b)=>b.length-a.length)[0].length
}
