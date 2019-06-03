function pointsPer48(ppg, mpg) {
  return mpg?Number((ppg/mpg*48).toFixed(1)):0;
}
