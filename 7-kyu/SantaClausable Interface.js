const isSantaClausable = obj =>
  ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
    methodName => typeof obj[methodName] === 'function'
  )
