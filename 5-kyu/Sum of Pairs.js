function sum_pairs(ints, s) {
  let lastNumber

  for (let i = 0; i < ints.length; i++) {
    if (lastNumber && lastNumber === ints[i]) continue
    lastNumber = ints[i]

    const sliced = ints.slice(0, i)
    const sumIndex = sliced.indexOf(s - ints[i])

    if (sumIndex !== -1) return [sliced[sumIndex], ints[i]]
  }
}

//clever solution

var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}
