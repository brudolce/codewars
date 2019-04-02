function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
  let ages = [age1,age2,age3,age4,age5,age6,age7,age8]

  return Math.floor(Math.floor(ages.reduce((a,e)=> a + (e*e),0)**(1/2))/2)
  }
  
