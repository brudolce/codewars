const meeting = x => {
  const emptyRoomIndex = x.indexOf('O')
  return emptyRoomIndex === -1 ? 'None available!' : emptyRoomIndex
}
