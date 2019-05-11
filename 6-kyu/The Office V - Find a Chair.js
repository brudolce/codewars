function meeting(x, need){
    let arr = [];
    if(need === 0) { return "Game On"; }
    for(let i = 0; i < x.length; i++){
        let temp = 0;
        if(x[i][1] > x[i][0].length)
            temp = x[i][1] - x[i][0].length;
        if(need - temp < 0)
            temp = need;
        need -= temp;
        arr.push(temp);
        if(need === 0) { return arr; }
    }
    
    return (need > 0) ? "Not enough!" : arr;
}
