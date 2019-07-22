const G = 9.81
function dist(v, mu) {								
   let u = v*5/18;
		return (u*u)/(2 * mu * G) + u;	
}

function speed(d, mu) {							
      let b = -2 * mu * G;
	    return (3.6 * (b + Math.sqrt(b*b - 4*b*d) ) / 2);
}
