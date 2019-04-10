function sum_pairs(ints, s) {
  let lastNumber

  for (let i = 0; i < ints.length; i++) {
    if (lastNumber && lastNumber === ints[i]) continue
    lastNumber = ints[i]

    const sl = ints.slice(0, i)
    const sumIndex = sl.indexOf(s - ints[i])

    if (sumIndex !== -1) return [sl[sumIndex], ints[i]]
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
