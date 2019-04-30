def my_first_interpreter(code)
  output = []
  memory_cell = 0
  commands = code.delete('^+.')             ## remove all non-command characters
  increment = commands.scan(/(^\.+)/)       ## check for "." commands at the start of the string
  unless increment.empty?
    output << (memory_cell.chr * increment[0][0].chars.length)
  end
  increment = commands.scan(/(\++)(\.+)/)   ## check for "+" commands followed by "."
  increment.each do |i|
    memory_cell += i[0].length
    output_n = i[1].length
    memory_cell > 255 ? memory_cell = (memory_cell - 256) : memory_cell
    output << (memory_cell.chr * output_n)
  end
  output.join
end
