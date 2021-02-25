/***********************************************************************
Write a recursive function called `shortestToLongest` which takes
an array of lowercase strings and returns them sorted from shortest
to longest.

Strings of equal length should be sorted alphabetically.

(Hint: str1 < str2 will return true if str1 comes before str2
alphabetically. EXAMPLE: a < b < c is true)

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the shortest string in the `strings` array to the end of `sorted`.


// Examples:
***********************************************************************/

// Find the shortest string in the `strings` array
// Remove the shortest string from the `strings` array
// Push the shortest string to the back of the `sorted` array
// Recurse until the `strings` array is empty (base base)

// function shortestToLongest(strings, sorted=[]) {

//     // console.log(`The Current STRINGS Array is now...`)
//     // console.log(strings);

//     // BASE CASE 
//     if (strings.length <= 0) {
//         // console.log("No more strings in STRINGS Array!!!!!")
//         return strings;
//     }
//     let shortestWord = strings[0];
//     let shortestLength = strings[0].length;
//     let shortestIndex = 0;

//     // console.log(`The first shortest word is ${shortestWord}`);
//     // console.log(`The length of the first shortest word is ${shortestLength}`);
//     // console.log(`The index of the first shortest word is ${shortestIndex}`);
//     // console.log("--------------");

//     for (let i = 1; i < strings.length; i++) {
//         let word = strings[i];
//         let wordLength = word.length;

//         // we are finding the shortest word in the array
//         if (word < shortestWord) {
//             if (wordLength < shortestLength) {
//                 shortestLength = wordLength;
//                 shortestWord = word;
//                 shortestIndex = i;

//             }
//         }
//     }
//     // console.log("~~~ After some For Loop Magic ~~~")

//     // console.log(`CURRENT STATS:`)
//     // console.log(`Current shortest word: ${shortestWord}`);
//     // console.log(`Length of shortest word: ${shortestLength}`);
//     // console.log(`Index of shortest word: ${shortestIndex}`);

//     sorted.push(shortestWord);

//     // console.log(`The SORTED Array, so far, contains...`);
//     // console.log(sorted);

//     // console.log(`The Original STRINGS Array now contains...`);
//     // console.log(strings);

//     // console.log(`******** Running Recursion Again ********`)
//     // console.log(` `)

//     // console.log(strings);
//     // return (shortestToLongest(strings.slice(1)), sorted);

//     const firstPart = strings.splice(shortestIndex, 1);
//     return firstPart.concat(shortestToLongest(strings, sorted));
//     // return shortestToLongest(strings.splice(1), sorted);
// }

function shortestToLongest(strings, sorted = []) {

    // BASE CASE 
    if (strings.length === 0) {
        return strings;
    } else {

        let shortestWord = strings[0];
        let shortestLength = strings[0].length;
        let shortestIndex = 0;

        for (let i = 1; i < strings.length; i++) {
            let word = strings[i];
            let wordLength = word.length;

            // we are finding the shortest word in the array
            if (wordLength < shortestLength) {
                shortestLength = wordLength;
                shortestWord = word;
                shortestIndex = i;
            } else if (wordLength === shortestLength) {
                if (word < shortestWord) {
                    shortestLength = wordLength;
                    shortestWord = word;
                    shortestIndex = i;
                }
            }
        }

        
        sorted.push(shortestWord); 
        // console.log(`We pushed ${shortestWord} into Sorted Array!`);
        // console.log(sorted);
    
        const firstPart = strings.splice(shortestIndex, 1)
        // console.log(`What is First Part have? ${firstPart}`);
        return firstPart.concat(shortestToLongest(strings, sorted));


    }
}


// Sorts strings from shortest to longest
// let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
// console.log(shortestToLongest(strings1));
// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']


// Accepts a pre-sorted default parameter
// let strings2 = ["pomegranate", "persimmon", "peach"];
// let sorted = ["pea", "pear"];
// console.log(shortestToLongest(strings2, sorted));
// ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']

// Sorts strings of the same length alphabetically
// let strings3 = shortestToLongest(["dog", "cat", "elephant", "ant", "pig", "emu"]);
// console.log(shortestToLongest(strings3));
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = shortestToLongest;
} catch {
    module.exports = null;
}