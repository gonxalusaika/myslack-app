module.exports = function(query) {
  var scrabble = '';

  query.split('').forEach(function(c) {
    if (c.match(/[a-z|A-Z| ]/)){
      var newChar = c === ' ' ? 'blank' : c.toLowerCase();
      scrabble += ':scrabble-' + newChar + ':';
    }
    else {
      scrabble += c;
    }
  });

  return scrabble;
}
