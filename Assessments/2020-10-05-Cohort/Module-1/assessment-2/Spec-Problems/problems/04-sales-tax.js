/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front.

Hint: Look up `toFixed()` on MDN

Examples:


***********************************************************************/

let salesTax = (num, ...nums) => {
    let sum = 0;
    sum += num;

    nums.forEach(function(number){
        sum += number;
    })

    let tax = sum * .09;
    return tax.toFixed(2);
}

salesTax(30, 70); // '$9.00'
salesTax(1.12, 2.23, 3.34, 4.45); // '$1.00'
salesTax(4.99, 9.99, 19.99); // '$3.15'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = salesTax;
} catch(e) {
    module.exports = null;
}