function topThreeWords(text) {
  const cleanString = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase(),
        words = cleanString.match(/\S+/g) || [],
        frequencies = {};
  let word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    if (words[i].match(/^[\\']+$/)){
        word = [] 
    }
    else {
       word = words[i];
       frequencies[word] = frequencies[word] || 0;
      frequencies[word]++;
    }
  }
  
  frequency = Object.keys(frequencies);

  return frequency.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0, 3)
}

//clever solution
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
}
