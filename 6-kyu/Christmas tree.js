//clever
function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}



//non conventional
function christmasTree(height) {
  let branch = tree = fill = '';
  let base = 2 * (height - 1) + 1;
  for(let i = 0; i <= height - 1; i += 1) {
    let needles = 2 * i + 1;
    branch = new Array(needles + 1).join('*');
    fill = new Array((base - needles) / 2 + 1).join(' ');
    tree += fill + branch + fill;
    tree += i < height - 1 ? '\n' : '';
  }
  return tree;
}
