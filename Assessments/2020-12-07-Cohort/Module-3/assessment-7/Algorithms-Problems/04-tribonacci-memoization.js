/**
 * Given the number, n, tribonacci() will find the nth number in the
 * tribonacci sequence.
 *
 * Instructions:
    * Currently, tribonacci() is not using the memo object.
    * Use the "memo" object to improve the function's time complexity when it
    * takes in a "large" input.
    *
    * Do not change the name of the tribonacci function.
    *
    * In the tribonacci function, DO NOT CHANGE the first four lines of
    * of non-commented code because ***the algorithm already works.***
    * Your job is to use the memo object to make the algorithm more efficient.

 * Wikipedia's intro to the Tribonacci Sequence:
    * "The tribonacci numbers are like the Fibonacci numbers, but instead of
    * starting with two predetermined terms, the sequence starts with three
    * predetermined terms and each term afterwards is the sum of the preceding
    * three terms."
* The first few tribonacci numbers are:
  * 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149
*
* https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers
 ***************************************************************************/


const memo = {0: 0, 1: 0, 2: 1};

function tribonacci(n) {
  // DO NOT CHANGE THE NEXT FOUR LINES
  if (memo[n] !== undefined) return memo[n];
  const n1 = tribonacci(n - 1);
  const n2 = tribonacci(n - 2);
  const n3 = tribonacci(n - 3);
  // DO NOT CHANGE THE PREVIOUS FOUR LINES

  return memo[n] = n1 + n2 + n3;

  //return n1 + n2 + n3;
}


/****************************************************************************
 * In case you want to know about Tribonacci numbers, here's the Wikipedia
 * link, though you really don't need to know anything more.
 * https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers
 ***************************************************************************/

/****************************************************************************
 * Do not change code below this line.
 */
try {
  module.exports = { tribonacci, memo };
} catch (e) {}