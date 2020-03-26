var beeramid = function(bonus, price) {
  let total = 0;
  let levels = 1;
  
  while (true) {
    total += Math.pow(levels, 2) * price;
    
    if (total > bonus) {
      return levels - 1;
    }
    
    levels++;
  }
};
