function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}


// sol 2 with cool add stuff
function multiply(a, b){
var final = "0";
var temp;
for(var i = b.length-1; i >= 0; i--){
  temp = single(a,b[i])
  for(var j = b.length - i; j > 1; j--){
    temp = temp + "0"
  }
  final = add(final, temp);
}
return final === "" ? "0" : final;
}
function add(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
return res.replace(/^0+/, '');
}
function single(a, bx){
var arr = [];
var temp, carry = 0;
for(var i = a.length-1; i >= 0; i--){
temp = ((parseInt(bx,10) * parseInt(a[i],10)) + carry)% 10;
carry = Math.floor((parseInt(bx,10) * parseInt(a[i],10)+carry)/10);
arr.unshift(temp);
}
arr.unshift(carry);
return arr.join("");
}
