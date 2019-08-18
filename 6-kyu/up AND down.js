function arrange(strng) {
    let arr = strng.split(" ");
    let arrLen = arr.length;
    let comparer = [(a, b) => a.length > b.length,
                    (a, b) => a.length < b.length];
    for (let i = 0; i < arrLen - 1; i++) {
      if (comparer[i % 2](arr[i], arr[i + 1])) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
    return arr.map((e, i) => (i % 2) ? e.toUpperCase() : e.toLowerCase()).join(" ");
}
