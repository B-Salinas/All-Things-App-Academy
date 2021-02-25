## Calculator

This problem is worth 1 point. You may receive partial credit.

Build a calculator function that takes in three arguments: `num1`, `operator`, and `num2`. Each number will be an integer and the operator will be `+`, `-`, `*`, or `/`. Your function will perform the calculations between the two numbers and return the answer.

If the operator is invalid, return `NaN`.

This problem is worth 5 points. It is possible to get partial points on this problem.

---

#### Solution

```js
function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  
  } else if (operator === "-") {
    return num1 - num2;
    
  } else if (operator === "*") {
    return num1 * num2;
  
  } else if (operator === "/") {
    return num1 / num2;
  
  } else {
    return NaN;
  }
}

```
