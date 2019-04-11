class Ghost {
  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red']
  }

  get color() {
    const randomPosition = Math.trunc(Math.random() * this.colors.length)
    return this.colors[randomPosition]
  }
}

// clever

var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
