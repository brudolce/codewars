function humanReadable(seconds) {
  const minutes = seconds / 60
  const ceconds = Math.floor(seconds % 60)
  const minutes = Math.floor(minutes % 60)
  const hour = Math.floor(minutes / 60)

  const readableHour =
    String(hour).length === 1 ? String(hour).padStart(2, '0') : hour

  const readableMinutes =
    String(minutes).length === 1
      ? String(minutes).padStart(2, '0')
      : minutes

  const readableSeconds =
    String(seconds).length === 1
      ? String(seconds).padStart(2, '0')
      : seconds

  return `${readableHour}:${readableMinutes}:${readableSeconds}`
}
