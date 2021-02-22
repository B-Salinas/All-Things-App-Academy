/***********************************************************************
Write a function `mostFrequentLetter(string)` that will takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:


***********************************************************************/

function mostFrequentLetter(string) {
	let str = string.split("");
	let charCount = {};

	let count = 1;
	str.forEach(function(char){
		console.log(char);
		if (charCount[char] === undefined) {
			charCount[char] = 1;
		} else {
			count++;
			charCount[char] = count;
		}
	})
	str.join("");
	return count;
}
	

// mostFrequentLetter("apple") // "p"
// mostFrequentLetter("banana") // "a"
mostFrequentLetter("What abou˜t a longer string?") // " "

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentLetter;
