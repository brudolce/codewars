var number = function(busStops){
  return busStops.reduce( (acc,e) => acc + e[0] - e[1], 0)
}
