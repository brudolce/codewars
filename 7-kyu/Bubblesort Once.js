const bubblesortOnce = function([h, ...t]) {
  return t.reduce(function(acc, v) {
    if (h < v) [h, v] = [v, h];
    return [...acc, v];
  }, []).concat(h || []);
};
