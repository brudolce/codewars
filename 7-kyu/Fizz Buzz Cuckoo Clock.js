function fizzBuzzCuckooClock(time) {
  let a = time.split(':').map(v => parseInt(v));
  let m = a[1], h = a[0];
  h = h === 0 ? 12 : h > 12 ? h - 12 : h;
  if (m === 0) return ('Cuckoo '.repeat(h)).trim();
  if (m === 30) return 'Cuckoo';
  if (m % 3 === 0) {
    if (m % 5 === 0) return 'Fizz Buzz';  
    return 'Fizz';  
  }
  if (m % 5 === 0) return 'Buzz';  
  return 'tick';
}

//clever solution
function fizzBuzzCuckooClock(time) {
  let [hour, minute] = time.split(':');
  return minute ==  0 ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
    minute      == 30 ? "Cuckoo" : 
    minute % 15 ==  0 ? "Fizz Buzz" :
    minute % 3  ==  0 ? "Fizz" :
    minute % 5  ==  0 ? "Buzz" : 
                        "tick";
}
