function stringTransformer(str) {
 return str.split` `.map(v=>v.replace(/./gi,v=>{
 if (v===v.toLowerCase()) return v.toUpperCase()
 if (v===v.toUpperCase()) return v.toLowerCase()
 })).reverse().join` `
}
