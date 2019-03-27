function diamond(n){
  if (n>=3&&n%2!==0){
let firstHalf = []
  for (let i = 0; i < (n-1)/2; i++) {
      firstHalf.push(" ".repeat(((n-1)/2) -i) + "*".repeat(i * 2 + 1) + "\n");
  }
  return [...firstHalf, "*".repeat(n) + "\n" ,...firstHalf.reverse()].join("");}
  return null
}
