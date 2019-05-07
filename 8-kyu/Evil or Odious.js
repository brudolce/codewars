function evil(n) {
 return n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!"
}
