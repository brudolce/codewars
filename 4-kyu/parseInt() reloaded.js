function parseInt(string) {
  var keywords = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
  };
  var mult = { 
    'hundred': 100, 
    'thousand': 1000, 
    'million': 1000000 
  };
  var string = '' + string;
  
  var parts = string.match(/\w+/g).filter(function(word) {
      return word != 'and';
  });
  parts.reverse()
  
  var result = 0;
  var piece;
  var multiplier = 1;
  for(i in parts){
        if(mult[parts[i]] != undefined ) {
            if(mult[parts[i]] == 100) {
                multiplier*=mult[parts[i]]
            }else{
                multiplier=mult[parts[i]]
            }
        } else {
            if (!isNaN(parseFloat(parts[i]))) {
                result += parseFloat(parts[i]) * multiplier;
            } else {
                var nums = parts[i].split('-');
                result += ((keywords[nums[0]]||0) + (keywords[nums[1]]||0)) * multiplier;
            }
        }
    }
  return result;
}


// clever solution

var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}
