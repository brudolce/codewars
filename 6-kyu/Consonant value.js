function solve(s) {
    return Math.max(...s.split(/[aeiou]{1,}/g).map(x=>x.split('').reduce((a,e)=>a+e.charCodeAt()-96,0)))
};
