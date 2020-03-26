function findChildren(santasList, children) {
  let arr = [];
  santasList.map(v => (children.includes(v) ? arr.push(v) : null));
  return arr.sort();
}
