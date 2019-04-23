String.prototype.myNewMethod = String.prototype.toUpperCase

//solution 2
String.prototype.myNewMethod = function () {
    return this.toUpperCase();
};
