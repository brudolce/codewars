function wave(str) {
    let arr = [];
    for(let i = 0; i < str.length; i += 1) {
        if(/\w/.test(str.charAt(i))){
            let temp = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1);
            arr.push(temp);
        }
    }
    return arr;
}
