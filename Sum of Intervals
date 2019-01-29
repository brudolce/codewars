function sumIntervals(intervals){
  let arr = [];
  intervals.forEach(([a, b]) => {
    for (let i = a; i < b; i++) {
      arr[i] = 1;
    }
  });
  return arr.reduce((acc, z) => acc + z);
}
