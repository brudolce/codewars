#sol 1
def spiralize(size):
    
    def on_board(x, y):
        return 0 <= x < size and 0 <= y < size
        
    def is_one(x, y):
        return on_board(x, y) and spiral[y][x] == 1
        
    def can_move():
        return on_board(x+dx, y+dy) and not (is_one(x+2*dx, y+2*dy) or is_one(x+dx-dy, y+dy+dx) or is_one(x+dx+dy, y+dy-dx))
    
    
    spiral = [[0 for x in range(size)] for y in range(size)]   
    x, y = -1, 0
    dx, dy = 1, 0
    turns = 0
    
    while (turns < 2):
        if can_move():
            x += dx
            y += dy
            spiral[y][x] = 1
            turns = 0
        else:
            dx, dy = -dy, dx
            turns += 1
    
    return spiral



sol #2 - good one
def can_move(map, i, j, di, dj):
  # Check whether can move in specified direction
  n = len(map)
  i += di
  j += dj
  
  # Cannot move outside of map
  if i < 0 or i >= n or j < 0 or j >= n:
    return False

  # Cannot move if occupied
  if map[i][j] == 1:
    return False
    
  i += di
  j += dj
  
  # Can move if second move falls outside
  if i < 0 or i >= n or j < 0 or j >= n:
    return True
  
  # Cannot move if second move is occupied
  if map[i][j] == 1:
    return False
    
  # Otherwise we can move
  return True

def spiralize(size):

  if size == 0:
    return []
  elif size == 1:
    return [[1]]
  elif size == 2:
    return [[1,1],[0,1]]
    
  # Initial map
  spiral = [ [0 for i in range(size)] for j in range(size) ]
  
  # Start position
  i = j = 0
  
  # Direction vector
  di, dj = 0, 1
  
  # Make a snake, cannot rotate more than once each time
  rotated = 0
  while rotated < 2:
    spiral[i][j] = 1

    if can_move(spiral, i, j, di, dj):
      # Move
      i += di
      j += dj
      rotated = 0
    else:
      # Rotate direction clockwise
      di, dj = dj, -di
      rotated += 1

  # Last step might have made spiral curl on itself
  di, dj = -dj, di
  if spiral[i + di][j + dj] == 1:
      spiral[i][j] = 0
      
  return spiral
