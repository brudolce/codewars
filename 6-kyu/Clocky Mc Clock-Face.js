var whatTimeIsIt = function(angle) {
  let hour=Math.floor(angle/30)
  if (hour===0) hour=12
  let min=Math.floor(angle%30*2)
  return `${('0'+String(hour)).slice(-2)}:${('0'+String(min)).slice(-2)}`;
}
