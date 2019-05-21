function once(fn) {
  let executed = false
  return function () {
    if (!executed) {
      executed = true;
      return fn.apply(this, arguments)
    }
  }
}
