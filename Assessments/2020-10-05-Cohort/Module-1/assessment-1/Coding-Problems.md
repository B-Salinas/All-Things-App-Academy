## Favorite Drink

Use `console.log` to print out a string containing your favorite drink. You should only have to write a single line of code. There is no incorrect choice here, just incorrect code :)

#### Solution
```js
console.log("My favorite drink is water.");
```

## Grouping Operator
The author of this code is trying to print out the average of the numbers 13 and 23 but is missing parentheses. Add parentheses to the code so that the correct result will print out. 

#### Solution
```js
console.log((13 + 23) / 2);
```

## Either String Included
Write a function named `eitherStringIncluded(sentence, str1, str2)` that accepts a sentence and two strings as arguments. The `eitherStringIncluded` function should return `true` if _either_ `str1` or `str2` is found in the sentence, and `false` if neither is found.

#### Solution
```js
let eitherStringIncluded = function(sentence, str1, str2) {
  
  if (sentence.includes(str1) || sentence.includes(str2)) {
  	return true;
  } 
  return false;
}
```

## Sum Evens Array
Write a function `sumEvens(nums)` that takes in an array of numbers. The function should add all the EVEN numbers in the array and return the sum. You can assume that `nums` will not be an empty array.

#### Solution
```js
let sumEvens = function(array) {
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
  
    if (el % 2 === 0) {
    	sum += el;
    }
  }
  	
  return sum;
}
```

## Rotate Left
Write a function `rotateLeft(array, num)` that takes in an array and a number as args. The function should rotate the elements of the `array` to the left `num` times, mutating the original array. The function should return no value (`undefined`). 

**Define this function using function expression syntax.**

#### Solution
```js
let rotateLeft = function(array, num) {

  for (let i = 0; i < num; i++) {
    let el = array[i];
    let removeFirst = array.shift()
    let addToEnd = array.push(removeFirst); 
  }

};
```

