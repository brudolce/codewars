const sequenceSum = (begin, end, step) => {
  let i,sum = 0;
  for (i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
};
