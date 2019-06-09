def justify(text, width):
    result = ''
    
    arr = text.split(' ')
    
    start = 0
    i = start + 1
    
    while start < len(arr):
    
      more_spaces = 0
      while len(' '.join(arr[start:i])) < width and i <= len(arr):
        i += 1
        
      if len(' '.join(arr[start:i])) > width:
        i = i - 1
        
      line = ' '.join(arr[start:i])
      array_of_line = line.split(' ')
      
      if len(array_of_line) > 1:
        more_spaces = width - len(line)
        places = line.count(' ')
        
        if more_spaces % places == 0:
            space_array = places * [ more_spaces / places ]
        else:
          space_array = []
          space_left = more_spaces
          while places != 0:
            space_array.append( space_left / places )
            space_left = space_left - ( space_left / places )
            places = places - 1
          space_array.reverse()
        
  
        final_line = ''
        for j in range(0, len(array_of_line) - 1 ):
          final_line = final_line + array_of_line[j] + ' '*(space_array[j]+1)
        final_line = final_line + array_of_line[-1]
      else:
        final_line = line
      result = result + final_line + '\n'
      
      start = i
      i = start + 1
      
    
    result = result[:-1].split('\n')
    last_line = ' '.join(result[-1].split())
    print last_line
    result[-1]=last_line
    return '\n'.join(result)
