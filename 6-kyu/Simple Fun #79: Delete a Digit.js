function deleteDigit(n) {
    n = String(n);
    for(let i = 0; i < n.length-1; i++){
        if(n[i] < n[i+1] && n[i] !== 0){
            return +(n.slice(0, i)+ n.slice(i+1))
        }
    }
    for(let i = 0; i < 9; i++){
        let idx =  n.indexOf(String(i))
        if(idx > -1){
            n = n.slice(0, idx) + n.slice(idx+1);
            break;
        }    
    }
    return +n;
}
