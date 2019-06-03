var createMessage = function() {
  let str = arguments[0];
   return function() {
     if (arguments.length > 0) {
       str += ' ' + arguments[0]; 
     } else return str;
     return createMessage(str) 
  }
}
