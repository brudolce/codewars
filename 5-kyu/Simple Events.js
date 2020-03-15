//function solution
function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function(handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function(handler) {
  var index = this.handlers.indexOf(handler);
  
  if (-1 !== handler) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function () {
  var args = arguments;
  this.handlers.forEach(function(handler) {
    handler.apply(null, args);
  });
};


//class solution
class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }
  
  unsubscribe(func) {
    this.subscribers.delete(func);
  }
  
  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}
