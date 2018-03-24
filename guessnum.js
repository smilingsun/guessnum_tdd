var guessnum = function(anwser, guess) {
  var countA = 0, countB = 0

  if (anwser == guess) {
    countA = 1
  } else if (guess.length === 2)  {
    countB = 1
  }
  return `${countA}A${countB}B`
}

module.exports = {
  guessnum: guessnum
}
