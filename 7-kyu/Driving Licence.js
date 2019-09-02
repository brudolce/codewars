

function driver(data) {
  let last = (data[2].toUpperCase() + "99999").slice(0,5)
  let decade = data[3].split(/\-/g)[2].substring(2,3)
  let m = new Date(data[3]).getMonth() + 1
  let month = data[4] ==="F" ?m + 50 +'' : ('0'+ m).slice(-2)
  let day = ('0' + new Date(data[3]).getDate()).slice(-2)
  let year = data[3].split(/\-/g)[2].substring(3,4)
  let initials = (data[0][0].toUpperCase() + (data[1]!==''? data[1][0].toUpperCase():'9'))
  let arbitrary = "9"
  let aa = "AA"
  return last+decade+month+day+year+initials+arbitrary+aa
}
