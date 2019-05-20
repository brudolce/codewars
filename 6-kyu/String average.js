//brutal array solution
function averageString(str) {
  const num = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
  const arr = str.split(' ');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) return 'n/a';
    result += num.indexOf(arr[i])
  }
  return num[parseInt(result/arr.length)]
}

//regular dude solution
function averageString(str) {
  var numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  sum = 0;
  str = str.split(' ');
  for(var i = 0; i < str.length; i++) {
    if(numObj[str[i]] === undefined) {
      return 'n/a';
    } else {
      sum += numObj[str[i]];
    }
  }
  return Object.keys(numObj)[Math.floor(sum/str.length)];
}
