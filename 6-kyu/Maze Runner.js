function mazeRunner(maze, directions) {
  var position = [];
  maze.forEach(function(curr, index) {
    if (curr.indexOf(2) !== -1) {
      position.push(index, curr.indexOf(2))
    }
  });
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === 'E') {
      position[1] += 1
    } else if (directions[i] === 'W') {
      position[1] -= 1
    } else if (directions[i] === 'N') {
      position[0] -= 1
    } else if (directions[i] === 'S') {
      position[0] += 1
    }
    if (position[0] === maze.length || position[0] < 0) {
      return 'Dead'
    }
    if (maze[position[0]][position[1]] === undefined) {
      return 'Dead'
    }
    if (maze[position[0]][position[1]] === 1) {
      return 'Dead'
    } else if (maze[position[0]][position[1]] === 3) {
      return 'Finish'
    }
  }
 return 'Lost'
}
