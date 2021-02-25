/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.


Example:

***********************************************************************/

// takes in array (of strs)
  // iterate through array
  // console.log each str in order
    // if str === "dot", pause 100ms
    // if str === "dash", pause 300ms

function morseCode(code) {

  code.forEach(item => {
    console.log(item);
    if (item === "dot") {
      setTimeout(() => {}, 100)
    } else {
      setTimeout(() => {}, 300);
    }
  })
}

// let code = ['dot', 'dash', 'dot'];

// morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}
