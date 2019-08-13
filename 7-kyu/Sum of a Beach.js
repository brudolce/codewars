function sumOfABeach(beach) {
  beach=beach.toLowerCase();
  return beach.match(/sand|water|sun|fish/g)===null?0:beach.match(/sand|water|sun|fish/g).length
}
