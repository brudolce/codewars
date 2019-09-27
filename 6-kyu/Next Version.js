const nextVersion = version => {
  let arr = version.split('.').map(Number);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] + 1 === 10 && i !== 0) {
      arr[i] = 0;
    } else {
      arr[i]++;
      break;
    }
  }
  return arr.join('.');
};
