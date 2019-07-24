function range(start = 0, end, step = 1) {
  if(end === undefined){end = start, start = 0;}
  let range = [];
  let steps = (end - start) / (step || 1);
  for(let i = 0; i < steps; i++) {
    range.push(start)
    start += step;
  }
  return range;
}
