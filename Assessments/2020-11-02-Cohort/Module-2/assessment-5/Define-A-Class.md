# Define a Class

This problem is worth 1 point. You may receive partial credit.

Write a class `Beverage` with a constructor that takes two values, the **name** and **if it's carbonated**. Create a `toString` method that returns "«name» fizzzz." if it is carbonated and "«name»" if it is not.

#### Solution
```js
class Beverage {
	constructor(name, fizz) {
      this.name = name;
      
     if (fizz) {
      	this.fizz = "fizzzz";
      }
    }
  
  	toString() {
      if (this.fizz) {
        return `${this.name} ${this.fizz}.`
      } else {
        return `${this.name}`
      }
       
    }
}
```
