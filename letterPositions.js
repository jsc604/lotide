const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      const key = sentence[i];
      const position = i;
      if (results[key]) {
        results[key].push(position);
      } else {
        results[key] = [position];
      }
    }
  }
  return results;
};

module.exports = letterPositions;