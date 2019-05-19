//the solution bellow is the result of good algebra skills wich are not mine, thanks Zé.

function f(n, m) {
  return Math.floor(n/m) * (m-1)*m/2 + (n%m)*(n%m+1)/2;
}
