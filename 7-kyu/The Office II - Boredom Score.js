const boredomScore = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
}

const boredom = staff => {
  const teamScore = Object.values(staff).reduce((total, department) => total + boredomScore[department], 0)

  if (teamScore <= 80) return 'kill me now'
  if (teamScore >= 100) return 'party time!!'
  return 'i can handle this'
}
