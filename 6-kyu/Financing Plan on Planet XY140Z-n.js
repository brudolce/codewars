function finance(n) {
  let acc = 0, el;
	for (let i = 0; i <= n; i ++){ 
		el = (2 * i + 2 * i + (n - i)) * (n + 1 - i) / 2
		acc += el}
	return acc;
}
