var guessnum = require('./guessnum.js').guessnum
var should = require('should')

describe('guessnum', () => {
  it('should return 1A0B when guess the correct 1 num', () => {
    guessnum('0', '0').should.be.equal('1A0B')
  })

  it('should return 0A0B when guess the incorrect 1 num', () => {
    guessnum('0', '1').should.be.equal('0A0B')
  })

  it('should return 0A1B when the guess is `12` and the answer is `20`', () => {
    guessnum('20', '12').should.be.equal('0A1B')
  })

  it('should return 0A2B when the guess is `12` and the answer is `21`', () => {
    guessnum('21', '12').should.be.equal('0A2B')
  })
})
