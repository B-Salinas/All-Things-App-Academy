```js
let test = [...x, ...y];
```

#### 1. What does the line of code do?
- [x] fills `test` with the elements of array `x` and array `y` using the spread operator
- [ ] destructures `x` and `y` objects into the `test` array
- [ ] fills `test` with the elements of array `x` and array `y` using the rest operator
- [ ] destructures `x` and `y` arrays into the `test` array

---

```js
let obj = { name: "Ghost", traits: ["mammal", "dog"] };

let { traits, name } = obj;
```

#### 2. What is the value of `traits` above?
- [ ] `undefined`
- [x] `["mammal", "dog"]`
- [ ] `"Ghost"`
- [ ] `{ name: "Ghost", traits: ["mammal", "dog"] }`

---

```js
function sayPuppy() {
  const puppy = "Wolfie";
  return puppy;
}

sayPuppy();

console.log(puppy); // ????
```

#### 3. What is the value logged in the last line of the snippet above (`console.log(puppy)`)? Why?
- [ ] `Wolfie` because `const` has global scope
- [ ] `undefined` because `puppy`'s value is undefined outside of `sayPuppy()`
- [ ] `Wolfie` because `puppy` is set to a constant value
- [x] An Error is thrown because `console.log()` references `puppy` out of scope

---

#### 4. True or False: JavaScript primitive types are immutable (meaning they cannot change). 
- [x] true
- [ ] false

---

```js
let company = {};
company.name = "Pizza Place";
console.log(company["name"]);
```

#### 5. What will the code above print out?
- [] `"Pizza Place"`
- [] `company.PizzaPlace`
- [] `{ name: "Pizza Place" }`
- [] `company.name`





















