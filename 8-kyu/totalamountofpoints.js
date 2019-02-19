function points(games) {
    let total=0
    for (let i=0;i<games.length;i+=1){
        const x = parseInt(games[i][0]);
        const y = parseInt(games[i][2]);
        if (x>y){
            total+=3;
        }
        if (x===y){
            total+=1;
        }
    }
    return total;
  }


//if x>y - 3 points
//if x<y - 0 point
//if x=y - 1 point

console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])) //10
console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])) //30