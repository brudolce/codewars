let myObj = new MyObject()


//solution
let myObj = {}
myObj.__proto__ = MyObject.prototype;
myObj.contructor = MyObject.constructor;
myObj.constructor();
