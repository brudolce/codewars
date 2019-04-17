//solution using class
class Vector extends Array {

  constructor(components) {

    super()

    this.push(...components)
  }

  add(vector) {

    if (! sameComponents(this, vector))
      throw new TypeError('This vector is from a different dimension')

    const components = []

    for (let i = 0; i < vector.length; i++)
      components[i] = this[i] + vector[i]

    return new Vector(components)
  }

  subtract(vector) {

    if (! sameComponents(this, vector))
      throw new TypeError('This vector is from a different dimension')

    const components = []

    for (let i = 0; i < vector.length; i++)
      components[i] = this[i] - vector[i]

    return new Vector(components)
  }

  dot(vector) {

    if (! sameComponents(this, vector))
      throw new TypeError('This vector is from a different dimension')

    const multiple = []

    for (let i = 0; i < vector.length; i++)
      multiple[i] = this[i] * vector[i]

    return multiple.reduce((sum, item) => sum + item, 0)
  }

  norm() {

    return Math.sqrt(this.reduce((sum, item) => sum + item * item, 0))
  }

  equals(vector) {

    if (! sameComponents(this, vector))
      return false

    for (let i = 0; i < vector.length; i++)
      if (this[i] !== vector[i])
        return false

    return true
  }

  toString() {

    return `(${this.join(',')})`
  }
}

function sameComponents(a, b) {

  return a.length === b.length
}

//long solution using prototype
var Vector = function (components) {
  var ts = {}.toString;
  
  if(ts.call(components) !== '[object Array]') 
    throw 'Incorrect argument type, expected argument of type: Array';
  
  this.components = components;
};

Vector.prototype.add      = function(vector){
  if(this.components.length !== vector.components.length) 
    throw 'Vector component lengths are not equal.';
  
  return new Vector(this.components.map(
    function(item, index){
      return item+vector.components[index];
    })
  )
}

Vector.prototype.subtract = function(vector){
  if(this.components.length !== vector.components.length) 
    throw 'Vector component lengths are not equal.';
  
  return new Vector(this.components.map(
    function(item, index){
      return item-vector.components[index];
    })
  )
}

Vector.prototype.dot      = function(vector){
  if(this.components.length !== vector.components.length) 
    throw 'Vector component lengths are not equal.';
  return this.components.map(
    function(item, index){
      return item*vector.components[index];
    }).reduce(
    function(prev, current){
      return prev+current;
    })
}

Vector.prototype.norm = function(){
  return Math.sqrt(this.components.map(function(item){
    return Math.pow(item, 2);
  }).reduce(function(prev, current){
    return prev+current;
  }));
}

Vector.prototype.equals = function(vector){
  let equals = true;
  for(var i = 0, l = this.components.length; i < l; i++){
    if(this.components[i] !== vector.components[i]) {
      equals = false;
      break;
    }
  }
  return equals;
}

Vector.prototype.toString = function(){
  return '('+this.components.join(',')+')';
}
