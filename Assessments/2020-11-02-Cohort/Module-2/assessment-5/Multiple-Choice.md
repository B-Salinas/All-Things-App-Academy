#### 1. Which of the following keywords is used in JavaScript to inherit one class from another?
- []
- []
- []
- []

---

#### 2. What does _polymorphism_ mean?
- []
- []
- []
- []
- []

---

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setAge(age) {
    this.age = age;
  }

  toString() {
    const value = `${this.lastName}, ${this.firstName}`;

    if (this.age!== undefined) {
      return `${value} (${this.age})`;
    }
    return value;
  }
}

const maria = new Person('Maria', 'Herrera');
maria.setAge(27);
console.log(maria.toString());
// What instance variables are set on maria, here?
```

#### 3. After the code above runs, what instance variables are set on the `Person` object strored in the `maria` variable?
- [] `this.firstName` and `this.lastName`
- [] None. There are no instance variables for this object
- [] `this.firstName`, `this.lastName`, `this.age`, and `value`
- [] `this.firstName`, `this.lastName`, and `this.age`

---

#### 4. Which of the following code snippets would result in a usable class named `Mother`?
- [] `class mother {}`
- [] `class Mother() {}`
- [] `class Mother {}`
- [] `Class Mother {}`

---

```js
class Manufacturer {
  constructor (name) {
    this.name = name;
  }

  getName() { return this.name; }
}

class Pencil {
  constructor(manufacturer, material) {
    this.manufacturer = manufacturer;
    this.material = material;
  }
}

const ticonderoga = new Manufacturer('Ticonderoga');
const yellow = new Pencil(ticonderoga, 'wood');
console.log(yellow.getManufacturerName()); // -> "Ticonderoga"

const bic = new Manufacturer('Bic');
const mechanical = new Pencil(bic, 'plastic');
console.log(mechanical.getManufacturerName()); // -> "Bic"
```

#### 5. Referring to the code above, what method can you add to the `Pencil` class so that it has the indicated output.
- [] `getManufacturerName() { return 'Ticonderoga'; }`
- [] `getManufacturerName() { return manufacturer.getName(); }`
- [] `getManufacturerName() { return this.manufacturer.getName(); }`
- [] `getName() { return 'Ticonderoga'; }`

---

#### 6. How might you identify tightly coupled classes?
- [] changes to one class affect the functionality of another related class
- [] a class has a property which is another class
- [] changes to one class affects only the functionality of that one class
- [] none of the classes have extensive knowledge of the definitions of other classes
- [] it improves the flexibility and reusability of a class

#### 7. From the following, choose the definition that best describes the object-oriented pillar of _encapsulation_. 
- [] "encapsulation" is not an object-oriented pillar
- [] "encapsulation" means to use data and methods from other objects specifically so that you can save that data to the file system, encapsulated in a file
- [] "encapsulation" drives the design of classes by requiring that any classes that inherit from a class must have the same invariants as the parent class
- [] "encapsulation" puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn't need to worry about the details of it

---

#### 8. The Law of Demeter can be referred to as which of the following? 
- [] "the one-variable rule"
- [] "the no-dot rule"
- [] "the one-dot rule"
- [] "the one-constructor rule"
- [] "the one ring to rull them all rule"
- [] "the one-method rule"

---

#### 9. Which of the following is not a way to approach OOP design?
- [] identify potential classes
- [] define relationships between classes
- [] define one class that takes care of all the functionality you want to provide
- [] write code with the intention of being reusable and easily extendable 
- [] specify properties and methods 

---

#### 10. Which of the following is true about inheritence? 
- [] inheritence allows a parent class to extend the expected behavior of a child class
- [] inheritance refers to when classes receive the properties and methods of their parent class
- [] inheritence allows a child instance to access attributes from a parent instance
- [] inheritance is used to instantiate a clone of a parent object
