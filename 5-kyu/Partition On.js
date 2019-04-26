function partitionOn(pred, items) {
  var sp_idx = 0;
  for(let i in items) {
    if(!pred(items[i])) {
      items.splice((sp_idx++), 0, items.splice(i, 1)[0]);
    }
  }
  return sp_idx;
}
