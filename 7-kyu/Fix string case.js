function solve(s){
    let up=s.split('').filter(v=>v.match(/[A-Z]/)).length
    let down=s.split('').filter(v=>v.match(/[a-z]/)).length
    return down>=up?s.toLowerCase():s.toUpperCase();
}
