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

_Define this function using function expression syntax._

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

## Even Numbers Below (Debugging)
Your friend is working on a function called `evenNumbersBelow()` which returns an array containing all even integers below than that number, ordered from lowest to highest. Zero is considered positive. Unfortunately, the code is not working correctly. Help them fix it!

#### Solution
```js
function evenNumbersBelow(num) {
    let arr = [];
    for (let i = 0 ; i < num ; i += 2) {
        arr.push(i);
    }
    return arr;
}
```

## While to For Loop Transition 
The following function is named `aDoubler(word)`. The function takes in a word and will return a new word that will double every lowercase 'a' it comes across. Your job is to translate the following function to use a `for` loop instead of the `while` loop it is currently using. 

#### Solution
```js
// ORIGINAL CODE
function aDoubler(word) {
  let doubleString = "";

  // Replace this code below with a "for" loop.
  let index = 0;
  while (index < word.length) {
    let char = word[index];
    if (char === "a") {
      doubleString += "aa";
    } else {
      doubleString += char;
    }
    index++;
  }
  // Replace the code above with a "for" loop.

  return doubleString;
};


function aDoubler(word) {
  let doubleString = "";

  // Replace this code below with a "for" loop.
  
  for (let index = 0; index < word.length; index++) {
    
    let char = word[index];
    if (char === "a") {
      doubleString += "aa";
    } else {
      doubleString += char;
    }
  }

  // Replace the code above with a "for" loop.

  return doubleString;
};
```

## Count Vowels
Write a function `countVowels(word)`, that takes in a string word and returns the number of vowels in the word. Vowels are the letters "a", "e", "i", "o", and "u".

#### Solution
```js
let countVowels = function(word) {
  let count = 0;
  let vowels = "aeiou";
  
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
};
```

## Pig Latin Word
Write a function `pigLatinWord` that takes in a word string and translates the word into Pig Latin. For words that start with a vowel, add 'yay' to the end of the word. For words that start with a non-vowel, move all letters that come before the **first vowel** to the end of the word, then add 'ay'. Vowels are the letters "a", "e", "i", "o", and "u".

#### Solution
```js
// So the two rules for our version of Pig Latin are:
// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

let pigLatinWord = function(str) {

  let vowels = "aeiou";
  
  let char = str[0];
  if (vowels.includes(char)) {
    return str + "yay";
  }
  
  let notVowels = "";
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    
    if (!vowels.includes(el)) {
      notVowels += el;
    } else if (vowels.includes(el)) {
      let everythingElse = str.slice(i);
      return everythingElse + notVowels + "ay";
    }
  }
};
```

## Two Dimensional Sum
Write a function `twoDimenstionalSum(arr)` that takes in a 2D array of numbers and returns the total sum of all numbers. 

#### Solution
```js
let twoDimensionalSum = function(array) {
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    let subArray = array[i];
    
    for (let j = 0; j < subArray.length; j++) {
      let num = subArray[j];
      sum += num;
    }
  
  }
  return sum;
};
```

## 2-Sum
Write a function `twoSum(arr, target)` that accepts an array and a target number as args. The function should return a boolean indicating if two distinct numbers of the array add up to the `target` value. You can assume that input array contains only unique numbers. 

#### Solution
```js
let twoSum = function(array, target) {
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    
    for (let j = i + 1; j < array.length; j++) {
  	  let num2 = array[j];
      
      if (num1 + num2 === target) {
      	return true;
      }
    }
  }
  return false;
};
```
