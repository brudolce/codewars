function loopSum(arr) {
    let ptrn = [1, 10, 9, 12, 3, 4];
    return arr.reduce((a,b,idx) => +(a) + (b*ptrn[idx%ptrn.length]));
}

function thirt(num) {
    let arr = String(num).split("").reverse(), next, ans = 0;
    while(next != ans) {
        ans = loopSum(arr);
        arr = String(ans).split("").reverse();
        next = loopSum(arr);
    }
    return +arr.reverse().join("");
}

// clever solution

function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum)
}
