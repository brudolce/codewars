function longestConsec(strarr, k) {
  if (strarr.length==0 || k>strarr.length || k<=0) return '';
  else {  
    let answer; let longest = "";
    for (let i=0; i<k; i += 1) {
      longest = longest + strarr[i];
    }
    for (let j=1; j<(strarr.length-(k-1)); j += 1) {
      let other = '';
      for (let x=0; x<k; x += 1) {
        other = other + String(strarr[j+x]);
        if (longest.length < other.length) {
          longest = other;
        }
      }
    }
    return longest;
  }  
}
