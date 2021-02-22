```js
function siren(message, volume) {
    if (volume === 10) {
        return;
    }

    console.log(message);
    siren(message, recursiveStep); // recursiveStep = ?
}

siren("WEE-OOO", 7); // should print "WEE-OOO", "WEE-OOO", "WEE-OOO"
```

#### 1. For the recursive function above, select the correct Recursive Step.
- [ ] `volume === 10`
- [x] `volume + 1`
- [ ] `volume + 10`
- [ ] `volume === 1`

---

```js
let goodbye;
```

#### 2. What is the value of `goodbye`?
- [ ] `0`
- [ ] `Error`
- [ ] `null`
- [ ] `goodbye`
- [x] `undefined`

---

#### 3. The Object data type (and those related to it like Function and Date) is the only JavaScript data type that has methods.
- [ ] false
- [x] true

---

```js
if ("banana") {
  // 1
} else if ([]) {
  // 2
} else if ("") {
  // 3
} else {
  // 4
}
```

#### 4. Which block in the above code will be run? 
- [ ] 4
- [ ] 3
- [x] 1 
- [ ] 2

---

```js
function boo() {
    console.log('boop!');
}

console.log('fizz');
setTimeout(boo, 0);
console.log('buzz');
```

#### 5. In the code above, what order will the messages be printed in?
- [ ] boop!, fizz, buzz
- [ ] boop!, buzz, fizz
- [x] fizz, buzz, boop!
- [ ] fizz, boop!, buzz

---

```js
function justDance(songs) {
  if (!songs) {
    return;
  } else {
    justDance(songs);
  }
}

justDance(["I Wanna Dance With Somebody (Who Loves Me)"]);
```

#### 6. Which of the following should we add to prevent an error from the above function?
- [x] a recursive step
- [ ] a parameter
- [ ] a base case

---

#### 7. IIFEs are one way to prevent the pollution of the global namespace by creating functions and variables that will disappear after the IIFE has been invoked.
- [ ] false
- [x] true

---

```js
console.log(sayHello("Jeff"));

function sayHello(name) {
  return `Hello ${name}`;
}
```

#### 8. What will happen when the above code snippet is run?
- [ ] `TypeError: sayHello is not a function`
- [x] `"Hello Jeff"` will be printed to the console
- [ ] `ReferenceError: Cannot access 'sayHello' before initialization`
