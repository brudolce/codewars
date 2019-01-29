function solve(time) {
  let hour = {13:'one', 14:'two', 15:'three', 16:'four',17:'five',18:'six',19:'seven',
  20:'eight',21:'nine',22:'ten',23:'eleven',24:'midnight', 1:'one',2:'two',3:'three',4:'four',
  5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven',12:'twelve', 0:'midnight'}
  let min = {1:'one',2:'two',3:'three',4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight',
  9:'nine', 10:'ten', 11:'eleven',12:'twelve', 13:'thirteen',14:'fourteen', 15:'quarter',
  16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',20:'twenty',21:'twenty one',
  22:'twenty two', 23:'twenty three',24:'twenty four', 25:'twenty five', 26:'twenty six',
  27:'twenty seven', 28:'twenty eight', 29:'twenty nine',30:'half' } 

  let minCheck = parseInt(time.slice(3));
  let hourRet = hour[parseInt(time.slice(0,2))];
  let hourRet2= hour[parseInt(time.slice(0,2))+1];
  let minRet = min[parseInt(time.slice(3))];
  let minRet2 = min[60-parseInt(time.slice(3))]; 
  //part1
  if (minCheck === 0 && parseInt(time.slice(0,2)) === 0) return hourRet
  if (minCheck === 0) return hourRet + " o'clock"
  //part2
  if (minCheck !== 0 && (minCheck === 15 || minCheck ===30)) {
    return minRet + ' past ' + hourRet
  }
  else if (minCheck!==0 && minCheck===1) {
    return minRet + ' minute past ' + hourRet
  }
  else if (minCheck!==0 && minCheck<=30) {
    return minRet + ' minutes past ' + hourRet
  }
  //part3
  else if (minCheck!==0 && minCheck===45){
    return minRet2 + ' to ' + hourRet2
  }
  else if (minCheck!==0 && minCheck===59){
    return minRet2 + ' minute to ' + hourRet2
  }
  else if (minCheck!==0 && minCheck>=30){
    return minRet2 + ' minutes to ' + hourRet2
  }
}
