function getGrade(...grades) {
  const score =
    grades.reduce((total, grade) => total + grade, 0) / grades.length

  if (score <= 100 && score >= 90) return 'A'
  if (score < 90 && score >= 80) return 'B'
  if (score < 80 && score >= 70) return 'C'
  if (score < 70 && score >= 60) return 'D'
  return 'F'
}
