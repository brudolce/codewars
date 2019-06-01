const well = x => {
  const goodIdeas = x.filter(idea => idea === 'good').length

  if (goodIdeas > 2) return 'I smell a series!'
  if (goodIdeas > 0) return 'Publish!'
  return 'Fail!'
}
