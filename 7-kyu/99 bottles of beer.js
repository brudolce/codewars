var sing = function () {
  // The most evil kata so far :)
  var lyrics = [];
  for (var i = 99; i >= 3; i--) {
    lyrics.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
    lyrics.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
  }
  return lyrics.concat([
    '2 bottles of beer on the wall, 2 bottles of beer.',
    'Take one down and pass it around, 1 bottle of beer on the wall.',
    '1 bottle of beer on the wall, 1 bottle of beer.',
    'Take one down and pass it around, no more bottles of beer on the wall.',
    'No more bottles of beer on the wall, no more bottles of beer.',
    'Go to the store and buy some more, 99 bottles of beer on the wall.'
  ]);
};
