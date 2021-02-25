const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
/**
 * In this file, you will test the class Rounder and its methods. The outline of
 * the expected tests is provided for you in describe/it format.
 *
 * NOTE: Put your tests in this file, not in the file in the test directory!
 *
 * DO NOT CHANGE THE ROUNDER CLASS PROVIDED!!!
 *
 */

/* BEGIN_CLASS_ROUNDER */
class Rounder {
  constructor(number) {
    this.number = number;
  }

  roundDown() {
    return Math.floor(this.number);
  }

  roundUp() {
    return Math.ceil(this.number);
  }

  roundUpToNearest10() {
    return (Math.floor(this.number / 10) + 1) * 10;
  }
}
/* END_CLASS_ROUNDER */

/**
 * DO NOT CHANGE ANY CODE ABOVE THIS LINE.
 */

describe('Rounder class', () => {
  context('roundDown() method', () => {
    it('returns a number rounded down to the nearest integer', () => {
      // arrange
      let test = new Rounder(7.4); 
      let expected = 7
    
      // act 
      let resultRoundDown = test.roundDown();

      // assert
      expect(resultRoundDown).to.eql(expected);
    });
  });

  context('roundUp() method', () => {
    it('returns a number rounded up to the nearest integer', () => {
      // arrange
      let test = new Rounder(7.4);
      let expected = 8;

      // act
      let resultRoundUp = test.roundUp();

      // assert
      expect(resultRoundUp).to.eql(expected)
    });
  });

  context('roundUpToNearest10() method', () => {
    it('returns the closest multiple of 10 greater than the input', () => {
      // arrange
      let n = 22.9
      let test = new Rounder(n)
      // let expected = (((n / 10) + 1) * 10); // I wonder why this doesn't work, it's straight from the function
      let expected = 30;
      
      // act
      let resultRoundNearest10 = test.roundUpToNearest10();

      // assert
      expect(resultRoundNearest10).to.eql(expected);


    });
  });
});