function rakeGarden(garden) {
  let rakedGarden= garden.split(' ').map(value=>value=='rock'?'rock':'gravel').join(' ') 
  return rakedGarden;
}
