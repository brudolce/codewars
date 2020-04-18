function findScreenHeight(width, ratio) {
    let r = ratio.match(/\d+/gi)
    return `${width}x${width*r[1]/r[0]}`
}
