function getPINs(observed) {
let nearby = [[0,8],[1,2,4],[1,2,3,5],[2,3,6],[1,4,5,7],[2,4,5,6,8],[3,5,6,9],[4,7,8],[5,7,8,9,0],[9,8,6]];
var res = [];

//depth first search
  const dfs = (node, ind) => {
    if (ind == observed.length){
      res.push(node.join(''));
      return;
    }
    for (let i = 0; i < nearby[observed[ind]].length; i += 1) {
      node.push(nearby[observed[ind]][i]);
      dfs(node, ind+1);
      node.pop();
    }
  }
  dfs([], 0);
  return res;
}
