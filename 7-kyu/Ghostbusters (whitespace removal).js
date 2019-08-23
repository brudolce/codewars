function ghostBusters(building) {
return /\s/gi.test(building) 
  ? building.replace(/\s/gi,'')
  : "You just wanted my autograph didn't you?"
}
