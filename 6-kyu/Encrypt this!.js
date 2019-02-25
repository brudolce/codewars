var encryptThis = function(text) {
  if(!text) return '';
  return text.split(' ').map(word => {
    const chars = word.split('');
    chars[0] = chars[0].charCodeAt(0);
    [chars[1],chars[chars.length-1]]=[chars[chars.length-1],chars[1]]
    return chars.join('')
  }).join(' ')
}
