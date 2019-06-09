function summy(stringOfInts){
    return stringOfInts.split(' ').reduce((acc,cur)=>acc+parseFloat(cur),0)
}
