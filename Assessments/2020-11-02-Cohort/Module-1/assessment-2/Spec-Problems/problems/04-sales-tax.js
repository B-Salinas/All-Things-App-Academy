/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:
***********************************************************************/

// use fat arrow syntax
// takes in unknown num of prices (use rest parameter)
// create sum variable
// iterate through prices array created by rest parameter
  // add each num to sum
// create tax variable 
  // tax = sum * .09 (9% tax)
// return tax with .toFixed();

let salesTax = (...prices) => {

  let sum = prices.reduce((acc, ele) => {
      return acc + ele;
  });
  
  let tax = sum * .09;
  
  return "$" + tax.toFixed(2)
}


console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = salesTax;
} catch(e) {
    module.exports = null;
}