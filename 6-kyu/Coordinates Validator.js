function isValidCoordinates(coordinates){
  return /^(-?((\d|[0-8]\d)(\.\d+)?)|90),\s?(-?((\d\d?|[01][0-7]\d)(\.\d+)?)|180)$/.test(coordinates);
}
