function roundIt (n) {
    
    let [left, right] = n.toString().split('.').map(x => x.length),
        dx = left - right,
        fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round
        
    return fn(n)
}
