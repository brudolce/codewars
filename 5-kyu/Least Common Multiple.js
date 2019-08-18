function gcd(m, n) { 
  return n === 0 ? m : gcd(n, m % n);
 }

const lcm = function () {
  let args = [].slice.call(arguments);

  if (args.length == 1) return args[0];

  args = args.sort(function(a,b){return b-a});

  return args.reduce((m, n)=> m * n / gcd(m, n));
};
