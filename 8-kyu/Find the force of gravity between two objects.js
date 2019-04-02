let solution = (arr_val, arr_unit) => {
  let weight = { 'kg':1, 'g':1/1000, 'mg':1/1000000, 'μg':1/1000000000, 'lb':0.453592 }
  let distance={ 'm':1, 'cm':1/100, 'mm':1/1000, 'μm':1/1000000, 'ft':0.3048}
  const G=6.67*Math.pow(10,-11)
  return (G*arr_val[0]*weight[arr_unit[0]]*arr_val[1]*weight[arr_unit[1]])/Math.pow(arr_val[2]*distance[arr_unit[2]],2);
};
