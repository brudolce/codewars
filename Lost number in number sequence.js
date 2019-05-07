function findDeletedNumber(arr, mixArr) {
  return arr.find(number => !mixArr.includes(number)) || 0
}
