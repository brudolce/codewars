function toSeconds(str){
    return str.split('|').reverse().reduce((a,b,idx) => +a + b*Math.pow(60,idx));
}

function toHMS(seconds){
    let hours = Math.floor(seconds/3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    return `${(hours<10)? '0'+hours:hours}|${(minutes<10)? '0'+minutes:minutes}|${(seconds<10)?'0'+seconds:seconds}`;
}

function mean(arr){
    return ~~(arr.reduce((a,b)=>a+b)/arr.length);
}

function range(arr){
    arr = arr.slice(0).sort((a,b)=>a-b);
    return (arr.length === 1) ? 0 : arr.pop() - arr.shift();
}

function median(arr){
    arr = arr.slice(0).sort((a,b)=>a-b);
    return (arr.length === 1) ? arr[0]:(arr.length%2===0) ? ~~((arr[arr.length/2-1]+arr[arr.length/2])/2): arr[~~(arr.length/2)];
}

let stat = function(str) {
    if(str.length === 0) { return '';}
    str = str.replace(/\s/g, '').split(",").map(a=>toSeconds(a));
    let avg = toHMS(mean(str)), rng = toHMS(range(str)), med = toHMS(median(str));
    return (`Range: ${rng} Average: ${avg} Median: ${med}`);
}
