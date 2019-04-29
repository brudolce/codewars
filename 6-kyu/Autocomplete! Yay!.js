  function autocomplete(input, dictionary){
  let result = []
  let cleanInput = ""

  for (let j=0;j<input.length;j++){
    if (input[j].match(/[a-zA-Z ]/)){
      cleanInput += input[j]
    }
  }
  for (let i=0;i<dictionary.length;i++){
      let slice = dictionary[i].slice(0, cleanInput.length)
   
      if (cleanInput.toLowerCase() == slice.toLowerCase()){
        result.push(dictionary[i])
        if (result.length === 5) {break}
      }
  }
  return result
}

//ridiculous solution
function autocomplete2(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}
