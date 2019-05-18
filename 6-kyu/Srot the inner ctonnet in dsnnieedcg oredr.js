let sortTheInnerContent = function(words) {
    return words.split(" ").map(w => 
                w.length === 1 ? w : 
                w.charAt(0) + 
                w.slice(1, w.length-1).split('').sort((a,b)=>a<b).join('') + 
                w.charAt(w.length-1)).join(' ');
}
