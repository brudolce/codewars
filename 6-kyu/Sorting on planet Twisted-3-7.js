function sortTwisted37(array) {
const MAPPING = {7:3,3:7};

return array.slice().sort((a,b)=> twist(a)-twist(b));

  function twist(number) {
    return parseInt(number.toString().replace(/[37]/g, a=>MAPPING[a]))
  }
}
