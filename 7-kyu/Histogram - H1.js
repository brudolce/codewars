function histogram(results) {
  return results.map((x,i)=>x===0?`${i+1}|\n`:`${i+1}|${'#'.repeat(x)} ${x}\n`).reverse().join('')
}
