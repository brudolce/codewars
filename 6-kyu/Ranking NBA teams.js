function nbaCup(resultSheet, toFind) {
    if(toFind === '') return '';

    //getting teams and score from resultSheet
    //use https://regexr.com/, helps a lot
    let teamRegex = /([^\ \d,](?<![er])([a-z\ ]{1,})(?!\S))/gi;
    let scoreRegex = /([\d\.]){1,}(?!\w)/g;
    
    let teams = resultSheet.match(teamRegex).map(team => team === 'Philadelphia' ? 'Philadelphia 76ers' : team);
    let scores = resultSheet.match(scoreRegex);
    
    //creating objects for the teams
    let obj = {};
    for(let i = 0; i < teams.length; i += 1) {
      if(!obj[teams[i]]) {
        obj[teams[i]] = { W: 0, L: 0, D: 0, Scored: 0, Conceded: 0, Points: 0 };
      }
    }
    
    //the kata asks teams on vacation, so let's solve this vacation thing
    if(!obj[toFind]) return toFind + ':This team didn\'t play!';
    
     
    //filling the objects with the results
    for(let j = 0; j < scores.length; j += 2) {
      let team1 = obj[teams[j]];
      let team2 = obj[teams[j + 1]];
      let score1 = Number(scores[j]);
      let score2 = Number(scores[j + 1]);

   //this kata sometimes acts like a douche, use some float numbers to score, so, lets solve this
    // using a \. in the score Regex, changing the above function parseInt() for Number() and the following line.
    if(score1 % 1 !== 0 || score2 % 1 !==0) {
        return 'Error(float number):' + teams[j] + ' ' + scores[j] + ' ' + teams[j + 1] + ' ' + scores[j + 1];
      }

      if(score1 > score2) {
        team1.W += 1;
        team1.Points += 3;
        team2.L += 1;
      }
      if(score1 === score2) {
        team1.D++;
        team1.Points += 1;
        team2.D++;
        team2.Points += 1;
      }
      if(score1 < score2) {
        team1.L += 1;
        team2.W += 1;
        team2.Points += 3;
      }
        team1.Scored += score1;
        team1.Conceded += score2;
        team2.Scored += score2;
        team2.Conceded += score1;
    }
    
    return toFind + ":" + "W=" + obj[toFind].W + ";"
    + "D=" + obj[toFind].D + ";" + "L=" + obj[toFind].L 
    + ";" + "Scored=" + obj[toFind].Scored + ";" 
    +"Conceded=" + obj[toFind].Conceded + ";"
    + "Points=" + obj[toFind].Points;
}
