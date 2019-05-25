const nextId = ids => {
  const used = new Set(ids)

  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i
  }
}
