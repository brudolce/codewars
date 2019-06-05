function fusc(n){
    if (n == 0 || n == 1) return n;
		if (n % 2 == 0) return fusc(n / 2);
		return fusc((n-1) / 2) + fusc((n+1) / 2);
}
