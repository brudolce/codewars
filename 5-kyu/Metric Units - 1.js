function meters(x) {
  if(Math.floor(x/1000000000000000000000000)>0) return `${x/1000000000000000000000000}Ym`
  if(Math.floor(x/1000000000000000000000)>0) return `${x/1000000000000000000000}Zm`
  if(Math.floor(x/1000000000000000000)>0) return `${x/1000000000000000000}Em`
  if(Math.floor(x/1000000000000000)>0) return `${x/1000000000000000}Pm`
  if(Math.floor(x/1000000000000)>0) return `${x/1000000000000}Tm`
  if(Math.floor(x/1000000000)>0) return `${x/1000000000}Gm`
  if(Math.floor(x/1000000)>0) return `${x/1000000}Mm`
  if(Math.floor(x/1000)>0) return `${x/1000}km`
  return `${x}m`
}
