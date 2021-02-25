# Create a Parent Class

This problem is worth 1 point. You may receive partial credit. 

Define a `Person` class that has a constructor and a method named `getLastName` that makes the code work.

#### Solution
```js
class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  
  getLastName() {
    return `${this.lastName}`
  }
}
```
