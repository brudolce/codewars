const cannonsReady = (gunners) => {
  return Object.values(gunners).every(response => response === 'aye')
    ? 'Fire!'
    : 'Shiver me timbers!'
}
