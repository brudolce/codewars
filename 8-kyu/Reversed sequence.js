const reverseSeq = n => {
  let r = Array.from({length: n}, (v,k) => k+1)
  return r.reverse()
};
