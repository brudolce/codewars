function dblLinear(n) {
    let x = 1;
    let y = [];
    let z = [];

    for (let i = 0; i < n; i += 1) {
        y.push(2 * x + 1);
        z.push(3 * x + 1);

        let min = Math.min(y[0], z[0]);
        if (min === y[0]) x = y.shift();
        if (min === z[0]) x = z.shift();
    }
    return x;
}
