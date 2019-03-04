function score(obj) {
    return obj.normKill * 100 + obj.assist * 50 + obj.damage * .5 + 
             obj.healing + Math.pow(2, obj.streak) + obj.envKill * 500;
}

function scoring(arr) {
    return arr.sort((a,b) => score(b)-score(a)).map(a=>a.name);
}
