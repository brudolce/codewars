function getMissingElement(superImportantArray){
  return 45 - superImportantArray.reduce((acc,e)=>acc+e)
}

//alternative reduce

function getMissingElement(superImportantArray){
  return superImportantArray.reduce((acc,e)=>acc - e, 45)
}
