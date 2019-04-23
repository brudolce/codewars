Array.prototype.sameStructureAs = function (other) {
    if (!(this instanceof Array) || !(other instanceof Array)) return false;

    let thisStruct = checker(this),
        otherStruct = checker(other);

    return thisStruct === otherStruct;

    function checker(array) {
        if (!(array instanceof Array)) return "";
        let str = '';
        for (let i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                str += i + array[i].length + '[' + checker(array[i]) + ']';
            }
        }
        return str;
    }
}

//clever solution
Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
      return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};
