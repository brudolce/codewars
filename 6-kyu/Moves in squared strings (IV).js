let diag2Sym = str => {
    let arr = str.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[l - k2 - 1][l - k1 - 1]).join("")).join("\n");
}

let rot90Counter = str => {
    let arr = str.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[k2][l - k1 - 1]).join("")).join("\n");
}

let selfieDiag2Counterclock = str =>{
    let arr = str.split("\n"),
        sym = diag2Sym(str).split("\n"),
        rot = rot90Counter(str).split("\n");
    return arr.map((v, k) => `${v}|${sym[k]}|${rot[k]}`).join("\n");
}

let oper = (fct, s) => fct(s);

//sensei solution
function revStr(strng) {
    return [...strng].reverse().join('');
} 
function rot90Counter(strng) {
    var a = strng.split("\n").map(function(x) { return revStr(x); }).map(function(x) { return x.split(""); });
    var b = a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
    return b.map(function(x) { return x.join(""); }).join("\n");
}
function diag2Sym(strng) {
    return rot90Counter(strng).split("\n").map(function(x) { return revStr(x); }).join("\n");
}
function selfieDiag2Counterclock(strng) {
    var newstr2 = diag2Sym(strng).split("\n");
    var newstr3 = rot90Counter(strng).split("\n");
    return strng.split("\n").map(function(x, i) { return x + "|" + newstr2[i] + "|" + newstr3[i]; }).join("\n");
}
 function oper(fct, s) {
    return fct(s);
}
