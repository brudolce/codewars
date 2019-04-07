var findDigit = function(num, nth){
    const numS = String(Math.abs(num))
    return nth > numS.length ? 0 : nth > 0 ? Number(numS.split('').reverse('')[nth-1]) : -1
}
