function spyOn(func) {
  let calls = 0
  let all = []
  let val

  const spy = function(...args) {
    calls++
    all.push(...args)
    val = func.apply(this, args)
    return val
  }

  spy.callCount = () => calls
  spy.wasCalledWith = (x) => all.some((a) => x === a)
  spy.returned = (x) => x === val

  return spy
}
