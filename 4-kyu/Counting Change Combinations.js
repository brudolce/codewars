function countChange (target, arr) {
    if (target <= 0) return 0;

    if (!arr) {
      arr = [];
      for (let i = 1; i <= target; i += 1)
        arr[i] = i;
    }

    let a = [], b = [];

    for (let i = 0; i <= target; i += 1)
      a[i] = b[i] = 0;

    // start
    a[0] = 1;

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j <= target; j += 1)
        for (let k = 0; j + k <= target; k += arr[i])
          b[j + k] += a[j];

      for (let j = 0; j <= target; j+=1)
        a[j] = b[j], b[j] = 0;
    }

    return a[target];
  }
  
  //clever stuff
  var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}
