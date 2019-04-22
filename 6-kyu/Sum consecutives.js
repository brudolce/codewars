function sumConsecutives(s) {
  return s.reduce((acc, e, i, s) => {
    if (e !== s[i - 1]) acc.push(e);
    else acc[acc.length - 1] += e;
    return acc;
    }, []);
}
