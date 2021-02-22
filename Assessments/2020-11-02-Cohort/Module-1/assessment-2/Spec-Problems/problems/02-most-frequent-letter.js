/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:
***********************************************************************/

// P A R T   1
// takes in a str
// create charCount object
// iterate through str
  // if char is not in obj
	// charCount[char] = 1
  // if char is already in obj
	// charCount[char]++

// P A R T   2
// create mostFrequentChar variable (the char that has appeared the most)
// create mostFrequentCount variable (how many times has the char appeared)
// iterate through charCount object
  // if currentValue is highest than mostFrequentCount
	// reassign mostFrequentCount = currentValue
	// reassign mostFrequentChar = currentKey
// return mostFrequentChar

function mostFrequentLetter(string) {
  // P A R T   1
  let str = string.split("");
  let charCount = {};

  str.forEach(char => {
	  if (charCount[char] === undefined) {
		  charCount[char] = 1;
	  } else {
		  charCount[char]++
	  }
  });
  
  // P A R T   2
  let mostFreqChar = "";
  let mostFreqCount = 0;

  for (let char in charCount) {
	  let count = charCount[char];
	  
	  if (count >= mostFreqCount) {
		  mostFreqCount = count;
		  mostFreqChar = char;
	  }
  }
  return mostFreqChar;
}

console.log(mostFrequentLetter("apple")) // "p"
console.log(mostFrequentLetter("banana")) // "a"
console.log(mostFrequentLetter("What about a longer string?")) // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentLetter;
