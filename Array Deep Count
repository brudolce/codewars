function deepCount(a) {
    let temp = 0;
    for(let i = 0; i < a.length; i += 1) {
        if(Array.isArray(a[i])){
            temp += deepCount(a[i]);
        }
        temp += 1;
    }
    return temp;
}
