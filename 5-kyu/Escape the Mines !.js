//lomg solution
 function solve(map, miner, exit) {
    let queue = [{
            i: miner.x,
            j: miner.y,
            path: []
        }],
        m = map.map(function(arr) {
            return arr.slice();
        });
    while (queue.length > 0) {
        let cur = queue.shift();
        if (cur.i == exit.x && cur.j == exit.y)
            return cur.path;
        if (cur.i < 0 || cur.i >= map.length || cur.j < 0 || cur.j >= map[0].length || m[cur.i][cur.j] !== true)
            continue;
        m[cur.i][cur.j] = '*';
        let p = cur.path.slice();
        p.push('left');
        queue.push({
            i: cur.i - 1,
            j: cur.j,
            path: p
        });
        p = cur.path.slice();
        p.push('right');
        queue.push({
            i: cur.i + 1,
            j: cur.j,
            path: p
        });
        p = cur.path.slice();
        p.push('up');
        queue.push({
            i: cur.i,
            j: cur.j - 1,
            path: p
        });
        p = cur.path.slice();
        p.push('down');
        queue.push({
            i: cur.i,
            j: cur.j + 1,
            path: p
        });
    }
}

//clever
function solve(map, miner, exit) {
  var walked = {};

  var findExit = function (curX, curY, path) {

    if ((curX == exit.x) && (curY == exit.y)) {
      return path;
    }
    
    if (!map[curX] || !map[curX][curY] || walked[curX+'x'+curY]) {
      return;
    }
    
    walked[curX+'x'+curY] = true;

    return findExit(curX + 1, curY, path.concat('right'))
      || findExit(curX, curY + 1, path.concat('down'))
      || findExit(curX - 1, curY, path.concat('left'))
      || findExit(curX, curY - 1, path.concat('up'))
    ;  
  };

  return findExit(miner.x, miner.y, []);
}function solve(map, miner, exit) {
  var walked = {};

  var findExit = function (curX, curY, path) {

    if ((curX == exit.x) && (curY == exit.y)) {
      return path;
    }
    
    if (!map[curX] || !map[curX][curY] || walked[curX+'x'+curY]) {
      return;
    }
    
    walked[curX+'x'+curY] = true;

    return findExit(curX + 1, curY, path.concat('right'))
      || findExit(curX, curY + 1, path.concat('down'))
      || findExit(curX - 1, curY, path.concat('left'))
      || findExit(curX, curY - 1, path.concat('up'))
    ;  
  };

  return findExit(miner.x, miner.y, []);
}
