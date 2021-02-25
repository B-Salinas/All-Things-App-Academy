
const { expect } = require('chai');
class Rounder {
  constructor(number) {
    this.number = number;
  }

  roundDown() {
    return null;
  }

  roundUp() {
    return null;
  }

  roundUpToNearest10() {
    return null;
  }
}
/* END_CLASS_ROUNDER */

/**
 * DO NOT CHANGE ANY CODE ABOVE THIS LINE.
 */

describe('Rounder class', () => {
  context('roundDown() method detects bad output when it', () => {
    it('returns a number rounded down to the nearest integer', () => {
    let failed = false;
    try {
      
      // arrange
      let test = new Rounder(7.4); 
      let expected = 7
    
      // act 
      let resultRoundDown = test.roundDown();

      // assert
      expect(resultRoundDown).to.eql(expected);
    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });

  context('roundDown() method detects bad output when it', () => {
    it('returns a number rounded up to the nearest integer', () => {
    let failed = false;
    try {
      
      // arrange
      let test = new Rounder(7.4);
      let expected = 8;

      // act
      let resultRoundUp = test.roundUp();

      // assert
      expect(resultRoundUp).to.eql(expected)
    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });

  context('roundUpToNearest10() method method detects bad output when it', () => {
    it('returns the closest multiple of 10 greater than the input', () => {
    let failed = false;
    try {
      
      // arrange
      let n = 22.9
      let test = new Rounder(n)
      // let expected = (((n / 10) + 1) * 10); // I wonder why this doesn't work, it's straight from the function
      let expected = 30;
      
      // act
      let resultRoundNearest10 = test.roundUpToNearest10();

      // assert
      expect(resultRoundNearest10).to.eql(expected);


    
    } catch (e) {
      if (e.actual !== undefined && e.expected !== undefined) {
        failed = true;
      }
    }
    if (!failed) {
      expect.fail('You test did not handle bad output');
    }
});
  });
});


