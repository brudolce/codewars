function nexus(users) {
  let result = [];
  let table = [];
  for (key in users) {
    if (Number(key) === users[key]) return Number(key)
    table.push(Number(key))
    result.push(Math.abs(Number(key)-users[key]))
  }
  return table[result.indexOf(Math.min(...result))]
}
