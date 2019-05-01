//working solution
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

function calNumAnagram(word, proposedWord, frequencies, alphabet) {
  var denom = 1;
  var factRemainAlphabet = factorial(word.length - proposedWord.length);            
  for (var k1 in frequencies) {
    if (k1 !== alphabet) {
      denom = denom * factorial(frequencies[k1]);
    } else {
      denom = denom * factorial(frequencies[k1] - 1);
    }
  }
  return Math.floor(factRemainAlphabet / denom); 
}

function listPosition(word) {
  // Return the anagram list position of the word
  // sort the distinct alphabet in ascending order
  // count the frequency of each alphabet  
  var frequencies =  {};
  var alphabetArray = [];
  for (var i = 0; i < word.length; i++) {
    if (alphabetArray.indexOf(word[i]) < 0) {
      alphabetArray.push(word[i]);
    }
    if (frequencies[word[i]]) {
      frequencies[word[i]] += 1;
    } else {
      frequencies[word[i]] = 1;
    }
  }
  alphabetArray.sort();
  var matchedWord = '';
  var totalAnagram = 0;
  
  while (matchedWord !== word) {
    for (var z = 0; z < alphabetArray.length; z++) {
      var alphabet = alphabetArray[z];      
      if (frequencies[alphabet] > 0) {
        var proposedWord = matchedWord + alphabet;
        var idx = word.indexOf(proposedWord);
        if (idx === 0) {
          // matched, reduce count and update matched word
          frequencies[alphabet] -= 1; 
          matchedWord += alphabet;
          break;
        } else {
          // calculate number of words that need to form
          totalAnagram += calNumAnagram(word, proposedWord, frequencies, alphabet);        
        }
      }
    }
  }
  return totalAnagram + 1;
}


// not fast enough
function listPosition(word) {
  let w = word;
  word = word.split('');
  word = word.sort();
  let used = [];
  for (let i = 0; i < word.length; i++) used.push(false);
  let num = 0, flag = 0;
  function dfs(path, word, w) {
    if (path.length == word.length) {
      num += 1;
      if (path.join('') == w) flag = 1;
      return;
    }
    for (let i = 0; i < word.length; i++) {
      if (flag == 0) {
        if (i > 0 && !used[i-1] && word[i] == word[i-1]) continue;
        if (!used[i]){
          used[i] = true;
          path.push(word[i]);
          dfs(path, word, w);
          path.pop();
          used[i] = false;
        }
      }
      else break;
    }
  }
  dfs([], word, w);
  return num;
}

// clever stuff
function listPosition(word) {
    var indexer = {}; // D:3 B:1 A:0 C:2
    var counts = []; // 2 1 1 1

    var lettersCount = 0;
    word.split("").sort().forEach(function(x){
        if ( indexer[x] == undefined ) {
            indexer[x] = lettersCount;
            counts[lettersCount] = 0;
            lettersCount ++;
        }
    });

    var term = 1;
    var sum = term;
    word.split("").reverse().forEach(function(x, i){
        var step = i + 1, idx = indexer[x];
        counts[idx] ++;
        term /= counts[idx];
        for (var j = 0; j < idx; ++j) 
            if (counts[j] != 0) 
                sum += term * counts[j];
        term *= step;
    });
    return sum;
}
