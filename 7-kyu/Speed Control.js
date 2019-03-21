function gps(s, x) {
    if (x.length<2) return 0;

    let result = [];
    for (let i = 0; i<x.length-1; i += 1) {
      result.push((x[i+1]-x[i])*3600/s);
    }
    return Math.max(...result);
}
