function reject(array, iterator) {
  return array.filter(x => !iterator(x))
}
