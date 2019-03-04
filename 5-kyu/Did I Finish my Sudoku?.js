
function check(arr) {
    for(let i = 1; i < 10; i += 1)
        if(arr.indexOf(i) < 0)
            return false;
    return true;
}

function doneOrNot(board) {
    let [region1, region2, region3, result] = [[], [], [], true];
    for(let i = 0; i < board.length; i += 1) {
        if(!check(board[i]))
            result = false;
    }
    for(let i = 0; i < 9; i += 1) {
        let arr = []
        for(let j = 0; j < 9; j += 1)
            arr = arr.concat(board[j][i]);
        if(!check(arr))
            result = false;
    }
    for(let i = 0; i < 9; i+= 1) {
        [region1, region2, region3] = [region1.concat(board[i].slice(0,3)), 
                                       region2.concat(board[i].slice(3,6)),
                                       region3.concat(board[i].slice(6,9))]
        if((i+1)%3 === 0) { 
            if(!check(region1) || !check(region2) || !check(region3))
              result = false;
            [region1, region2, region3] = [[], [], []]
        }
    }
    return result ? "Finished!" : "Try again!";
}
