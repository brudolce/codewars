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
