var findInArray = function(array, iterator) {
  return array.map((v, i) => iterator(v, i)).indexOf(true);
};
