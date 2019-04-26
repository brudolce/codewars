function backwardsPrime(start, stop){
    var arr = [];
    for(var x = start; x <= stop; x++) {
        if(isPrime(x)) {
            if(arr.includes(x)) {
                continue;
            }
            let temp = parseInt(x.toString().split('').reverse().join(''))
            if (temp != x && isPrime(temp)) {
                arr.push(x);
                arr.push(temp);
            }
        }    
    }
    return arr.filter(a=> a >= start && a <= stop).sort((b,c)=>b-c);
}

function isPrime(n) {
    if(n == 2 || n == 3) {
        return true;
    }
    if(n % 2 == 0 || n % 3 == 0 || n < 2) {
        return false;
    }
    var x = 5;
    var N = Math.sqrt(n);
    while (x <= N) {
        if (n % x == 0) {
            return false;
        }
        x++;
    }
    return true;
}


//clever small thing
const backwardsPrime = (start, stop) => {
  // your code here
  let check=false,ret=[];
  for(let i=start;i<=stop;i++){
    check= isPrime(i);
    
    if(check===true){
        isPrime(Number(i.toString().split("").reverse().join(""))) && i.toString().split("").reverse().join("")!=i.toString() ? ret.push(i):"";
      }
  }
  
  return ret;
}

const isPrime = (num) => {
  for(let j=2;j<=Math.sqrt(num);j++){
    if(num%j==0){
      return false;
    }
  }
  return true;
    
}
