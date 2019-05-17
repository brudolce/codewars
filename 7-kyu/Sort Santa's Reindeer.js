const sortReindeer = reindeerNames =>
  [...reindeerNames].sort((currentName, nextName) =>
    currentName.split(' ')[1].localeCompare(nextName.split(' ')[1])
  )
