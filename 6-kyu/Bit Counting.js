var countBits = function(n) {
	return n.toString(2).split('').reduce((a,e)=>a+parseInt(e),0)
};
