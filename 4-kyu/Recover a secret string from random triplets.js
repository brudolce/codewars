var recoverSecret = function(triplets) {
  for(let [first] of triplets) {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}
