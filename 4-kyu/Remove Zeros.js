for(let i = array.length-1; i >= 0; i-=1) {
    if(array[i] === 0 || array[i] === '0') {
      j = i;
      while((j+1 < array.length) && (array[j+1] !== 0 && array[j+1] !== '0')) { 
        var arr0 = array[j];
        array[j] = array[j+1];
        array[j+1] = arr0;
        j+=1;
      }
    }
  }
  return array;
}
