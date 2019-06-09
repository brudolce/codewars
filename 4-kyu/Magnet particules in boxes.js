function doubles(maxk, maxn) {
    let fn = (a,b) => 1/(k * Math.pow((n + 1), 2*k)), k = 1, s = 0;
    while(k <= maxk) {
      for(var n = 1; n <= maxn; n++) 
        s += fn(k,n);
      k++;
    }
    return s;
}
