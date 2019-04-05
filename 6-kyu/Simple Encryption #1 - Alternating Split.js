function encrypt(text, n) {
    if (!text || n <= 0 || text.length <= 0) {
        return text;
    }
    
    const helper = function(str) {
        let output = "";
        let temp = "";
    
        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += text[i];
            } else {
                temp += text[i];
            }
        }
    
        return output + temp;
    };
    
    for (let i = 0; i < n; i++) {
        text = helper(text);
    }
    
    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    }
    
    const helper = function(str) {
        let odds = str.slice(0,(str.length/2));
        let evens = str.slice((str.length/2));
        let output = "";
        
        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
        }
        
        return output;
    };
    
    for (let i = 0; i < n; i++) {
        encryptedText = helper(encryptedText);
    }
    
    return encryptedText;
}

//clever solution

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

