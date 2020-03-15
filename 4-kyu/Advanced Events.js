function Event() {
  var queue = [];
  this.subscribe = function() {
    [].forEach.call(arguments, function(el) {
      if (typeof el != 'function') return;
      queue.push(el);
    });
  }
  this.unsubscribe = function() {  
    [].forEach.call(arguments, function(el) {
      if (typeof el != 'function') return;
      let pos = queue.lastIndexOf(el);
      if (~pos) {
        queue.splice(pos, 1);
      }    
    });
  }
  this.emit = function() {
  let task = queue.slice();
    while (task.length) {
      task.shift().apply(this, arguments);
    }
  };
}
