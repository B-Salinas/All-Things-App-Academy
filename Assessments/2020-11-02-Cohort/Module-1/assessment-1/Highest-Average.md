# Highest Average 

This problem is worth 1 point. You may receive partial credit.

First, create a function called `getAverage(nums)` which takes a single array of numbers and returns the average.

Then, write a function `highestAverage(numsList)` that takes in a 2D array of numbers and returns the index of the subarray with the highest average value.

This problem is worth 7 points. It is possible to get parital points on this problem.

#### Solution

```js
function getAverage(nums) {
  
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    sum += el;
  }
  return sum / nums.length;
}

function highestAverage(numsList) {
    
  let highestAvg = 0;
  let highestIndex = 0;
  
  for (let i = 0; i < numsList.length; i++) {
    let subList = numsList[i];
    
    if (getAverage(subList) > highestAvg) {
      highestAvg = getAverage(subList);
      highestIndex = i;
    }  
  }
  return highestIndex;
}
```
