/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:
***********************************************************************/

// takes in an obj
// creates an array of keys (Object.keys())
// create an array of values (Object.values())
// create empty array
// iterate through keys-array
  // if current key is found in values-array, add it to array (use .includes)
// return array of key that are also values

function keyValueDuplicates(obj) {
  let allKeys = Object.keys(obj);
  let allValues = Object.values(obj);
  
  let keyValues = [];
  allKeys.forEach(key => {
	  if (allValues.includes(key)) {
		  keyValues.push(key);
	  }
  });
  return keyValues;
}

// Really-Cleaned-Up Version 
// let keyValueDuplicates = obj => {
// 	let keyValues = Object.keys(obj).filter(key => {
// 		if (Object.values(obj).includes(key)) {
// 			return key
// 		}
// 	});
// 	return keyValues;
// }


obj1 = { "orange": "juice", "apple": "sauce", "sauce": "pan" }
console.log(keyValueDuplicates(obj1)) // ["sauce"]

obj2 = { "big": "foot", "foot": "ball", "ball": "boy", "boy": "scout" }
console.log(keyValueDuplicates(obj2)) // ["foot", "ball", "boy"]

obj3 = { "pizza": "pie", "apple": "pie", "pumpkin": "pie" }
console.log(keyValueDuplicates(obj3)) // []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyValueDuplicates;
