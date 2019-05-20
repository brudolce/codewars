function rowWeights(array){
  return   array.reduce((w, e, i) => {
      w[i % 2] += e;
      return w
    }, [0, 0])
}
