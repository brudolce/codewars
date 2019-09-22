//smart shit
const nextSmaller = n => {
  let min = minify(n);
  while (--n >= min) if (minify(n) === min) return n;
  return -1;
};

const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');


//sol2
function nextSmaller(n) {
  var digits = ('' + n).split('');
  for (var ix = digits.length - 1; ix-- > 0;) {
    if (digits[ix + 1] < digits[ix]) {
      var tail = digits.slice(ix).sort((a, b) => b - a);
      var head = tail.splice(tail.findIndex(x => x < digits[ix]), 1);
      if (!ix && '0' == head[0]) {
        return -1;
      }
      return +digits.slice(0, ix).concat(head, tail).join('');
    }
  }
  return -1;
}

//efficient sol
function nextSmaller(n) {
  console.log(n);
  var d = n.toString().split(''); 
  var i1 = 0;			
  var tmp;			
  var flag = false;		
  for (var i = 0; i < d.length - 1; i++) {
    if (d[i]>d[i+1]) {
      i1 = i;
      flag = true;
    }
  }
  if (flag == false) return -1;
  for (var i = d.length - 1; i > 0; i--) {
    if (i == i1) i--;
    if (d[i]<d[i1]) {
      tmp   = d[i];
      d[i]  = d[i1];
      d[i1] = tmp;
      break;
    }
  }
  if (d[0] == 0) return -1
  return parseInt(d.slice(0,i1+1).concat(d.slice(i1+1).sort((a,b) => b-a)).join(''))
}
