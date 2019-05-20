function timeCorrect(timestring) {
  if (!timestring) return timestring
  if (!/(\d{2}):(\d{2}):(\d{2})/g.test(timestring)) return null

  const date = new Date()
  const time = timestring.split(':').map(Number)

  date.setUTCHours(...time)
  return date.toLocaleTimeString('en', { hour12: false })
}
