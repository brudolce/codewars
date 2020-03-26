function pendulum(values) {
  let arr1 = [], arr2 = [];
  const sorted = values.sort((a, b) => a - b).map((v, i) => (i % 2===0 ? arr1 : arr2).push(v));
  return arr1.reverse().concat(arr2);
}
