/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:
***********************************************************************/

// grab keys 
// grab values
// while iterating through keys, iterate through every value
// push duplicate keys-values

function keyValueDuplicates(obj) {
	
	let allKeys = [];
	let allVals = [];
	let duplicates = [];

	for (let keys in obj) {
		allKeys.push(keys);
		let val = obj[keys]
		allVals.push(val);
	}

	for (let i = 0; i < allKeys.length; i++) {
		let currentKey = allKeys[i];

		for (let j = 0; j < allVals.length; j++) {
			let currentVal = allVals[j];

			if (currentVal === currentKey) {
				duplicates.push(currentKey);
			}
		}
	}
	
	if (duplicates.length === 0) {
		return [];
	}
	
	return duplicates;
}


obj1 = {"orange": "juice", "apple": "sauce", "sauce": "pan"}
keyValueDuplicates(obj1) // ["sauce"]

obj2 = {"big": "foot", "foot": "ball", "ball": "boy", "boy": "scout"}
keyValueDuplicates(obj2) // ["foot", "ball", "boy"]

obj3 = {"pizza": "pie", "apple": "pie", "pumpkin": "pie"}
keyValueDuplicates(obj3) // []


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyValueDuplicates;
