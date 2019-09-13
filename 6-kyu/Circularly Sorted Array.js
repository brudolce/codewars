function isCircleSorted( arr ){
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[(i + 1) % arr.length]) {
            cnt++;
        }
    }
    return cnt === 1;
}
