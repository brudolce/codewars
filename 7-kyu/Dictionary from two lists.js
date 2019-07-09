const createDict = (keys, values) =>
  keys.reduce((dictionary, key, index) => {
    dictionary[key] = index < values.length ? values[index] : null
    return dictionary
  }, {})
