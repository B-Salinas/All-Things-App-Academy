/***********************************************************************
Write a function called `dynamicAdder(num)`. The dynamicAdder function will
return a new function that will allow us to create new separate custom
adding functions.

Look below to see how this function is invoked:

***********************************************************************/

// function dynamicAdder(val) {
//     let adder = function (num){
//         let sum = val + num;
//         return sum;
//     }
//     return adder;
// }

function dynamicAdder(value) {
    let sum = 0;
    return function (number){
        sum = value + number;
        return sum;
    }
}

const addTwo = dynamicAdder(2); // returns a function
addTwo(5); // returns 7

const addTen = dynamicAdder(10);
addTen(5); // returns 15

const addNinety = dynamicAdder(90);
addNinety(5); // returns 95

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = dynamicAdder;
