function addLetters(...letters) {
  let ref = 'abcdefghijklmnopqrstuvwxyz'
  let i = [...letters].reduce((acc,e)=>acc+ref.indexOf(e)+1,0)

  return [...letters].length===0 ? 'z' : ref[(i-1)%ref.length]
}
