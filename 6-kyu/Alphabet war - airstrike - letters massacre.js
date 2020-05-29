function alphabetWar(fight) {
  let dict = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  const arr = [];
  const arr1 = fight.split("");
  for (let i = 0; i < fight.length; i++) {
    if (arr1[i - 1] !== "*" && arr1[i] !== "*" && arr1[i + 1] !== "*") {
      arr.push(arr1[i]);
    }
  }
  let sum = arr.reduce((a, b) => a + (dict[b] ? dict[b] : 0), 0);
  return sum < 0
    ? "Right side wins!"
    : sum > 0
    ? "Left side wins!"
    : "Let's fight again!";
}
