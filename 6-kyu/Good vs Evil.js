function goodVsEvil(good, evil) {
  let worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
  good = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
  evil = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
  if (good > evil) return "Battle Result: Good triumphs over Evil";
  if (evil > good) return "Battle Result: Evil eradicates all trace of Good";
  return "Battle Result: No victor on this battle field";
}
