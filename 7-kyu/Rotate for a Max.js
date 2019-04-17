function maxRot(n) {
    let str = String(n);
    let arr = [str];
    for (var i=0; i < str.length; i++) {
        str = str.slice(0,i) + str.slice(i+1) + str[i];
        arr.push(str);
    }
    return Math.max(...arr);
}
