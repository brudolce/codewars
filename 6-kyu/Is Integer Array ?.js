function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(x=> Math.floor(x) === x);
}
