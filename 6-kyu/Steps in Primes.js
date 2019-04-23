let isPrime = function(n){
    if(n % 2 === 0 || n < 2) { return false; }
    if(n===2) { return true;}
    for(let i = 3; i <= Math.sqrt(n); i+=2){
        if(n % i === 0) { return false; }
    }
    return true;
}

let step = function(g, m, n){
    for(let i = m, idx = 0; i <= n; i+=1){
        if(isPrime(i) && isPrime(i+g)){ return [i, i+g]}
    }
    return null;
}
