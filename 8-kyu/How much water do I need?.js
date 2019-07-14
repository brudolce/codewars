function howMuchWater(W,L,C){
 if (C>2*L) return 'Too much clothes'
 if (C<L) return 'Not enough clothes'
return  +((W * 1.1 ** (C - L)).toFixed(2))
}
