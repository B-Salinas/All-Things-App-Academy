```js
let dogs = ["Fido", "Bowser"];

let [firstEl, secondEl] = dogs;
```

#### 1. What does the above code do?
- [ ] declares a 2D array
- [ ] returns `undefined`
- [x] sets `firstEl` to "Fido" and `secondEl` to "Bowser"
- [ ] sets `dogs` equal to an array containing `firstEl` and `secondEl`

---

#### 2. Which of the following is not required to be a first class object?
- [x] ability to be mutated
- [ ] ability to be assigned to a variable
- [ ] ability to be an argument to a function
- [ ] ability to be a return value of a function

---

#### 3. True or False: JavaScript primitive types are immutable (meaning they cannot change).
- [x] true
- [ ] false

---

```js
let test = [...x, ...y]
```

#### 4. What does this line of code do?
- [x] fills `test` with the elements of array `x` and array `y` using the spread operator
- [ ] destructures `x` and `y` objects into the `test` array
- [ ] destructures `x` and `y` arrays into the `test` array
- [ ] fills `test` with the elements of array `x` and array `y` using the rest operator

---

![Question 5 image](images/q-five-img.png)

#### 5. Using the above folder structure how would you navigate from the root directory to the Users directory?
- [ ] `cd Desktop/Users`
- [ ] `cd ..`
- [x] `cd Users`
- [ ] `cd Root/Users`

---

```js
let company = {};
company.name = "Pizza Place";
console.log(company["name"]);
```

#### 6. What will the code above print out?
- [ ] `company.name`
- [ ] `{ name: "Pizza Place" }`
- [ ] `company.PizzaPlace`
- [x] `"Pizza Place"`

---

```js
let foo = function(n, cb) {
  console.log("vroom");
  for (let i = 0; i < n; i++) {
    cb();
  }
  console.log("skrrt");
};

foo(2, function() {
  console.log("swoosh");
});
```

#### 7. In what order will the code above print out?
- [ ] vroom, swoosh, swoosh, swoosh, skrrt
- [ ] swoosh, vroom, skrrt
- [ ] vroom, swoosh, skrrt, swoosh, skrrt
- [x] vroom, swoosh, swoosh, skrrt

---

```js
let obj = { name: "Ghost", traits: ["mammal", "dog"] };

let { traits, name } = obj;
```

#### 8. What is the value of `traits` above?
- [ ] `"Ghost"`
- [ ] `undefined`
- [x] `["mammal", "dog"]`
- [ ] `{ name: "Ghost", traits: ["mammal", "dog"] }`

---

```js
function bar() {
  var rand = "abc";

  if (true) {
    const rand = "efg";
  }
  return rand;
}

bar(); // ???
```

#### 9. The value returned by the `bar` function is \_\_, because...
- [ ] `efg` because `const` scope takes precedence over `var`
- [x] `"abc"` because `const` scope stays within the `if` block
- [ ] an error is thrown, because you cannot reassign a `const` variable
- [ ] `"abc"` because `var` scope takes precedence over `const`
- [ ] `"efg"` because `rand` is reassigned in the `if` block

---

```js
function sayPuppy() {
  const puppy = "Wolfie";
  return puppy;
}

sayPuppy();

console.log(puppy); // ????
```

#### 10. What is the value logged in the last line of the snippet above (`console.log(puppy)`)? Why?
- [ ] `Wolfie` because `puppy` is set to a constant value
- [ ] `undefined` because `puppy`'s value is undefined outside of `sayPuppy()`
- [x] an error is thrown because `console.log()` references `puppy` out of scope
- [ ] `Wolfie` because `const` has global scope
