function wordSearch(query, seq){
  const result = seq.filter(x=>x.toLowerCase().includes(query.toLowerCase()))
  return result.length === 0 ? ['Empty'] : result
}
