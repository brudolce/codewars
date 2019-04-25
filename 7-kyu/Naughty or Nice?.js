function getNiceNames(people){
  return  people.filter(({ wasNice }) => wasNice).map(({ name }) => name)
}

function getNaughtyNames(people){
  return people.filter(({ wasNice }) => !wasNice).map(({ name }) => name)
}
