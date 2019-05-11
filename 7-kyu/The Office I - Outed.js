const outed = (meet, boss) => {
  const meetArr = Object.entries(meet)

  const totalScore = meetArr
    .map(employee => {
      const [name, score] = employee
      return name === boss ? [name, score * 2] : [name, score]
    })
    .reduce((total, [_, score]) => total + score, 0)

  const averageScore = totalScore / meetArr.length

  return averageScore <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
