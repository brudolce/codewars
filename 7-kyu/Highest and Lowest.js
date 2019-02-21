const highAndLow = numbers => {
 let max = numbers.split(' ').reduce((acc, ele) => Math.max(acc,ele));
 let min = numbers.split(' ').reduce((acc, ele) => Math.min(acc,ele));
 return `${max} ${min}`
}
