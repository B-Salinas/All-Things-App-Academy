```js
function find(array, term) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === term) return true;
  }
  return false;
}
```

#### 1. With respect to the above function `find`, to what complexity class does it belong?
- [ ] polynomal
- [x] linear
- [ ] constant
- [ ] exponential

---

#### 2. Which of the following complexity classes does the unsimplified `T(n^3 + n*log(n))` simplify to?
- [ ] `O(n!)`
- [x] `O(n^3)`
- [ ] `O(1)`
- [ ] `O(n*log(n))`

---

```js
function whatSortAmI(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = whatSortAmI(left);
  let rightSorted = whatSortAmI(right);

  return [ ...leftSorted, pivot, ...rightSorted ];
}
```

#### 3. In the code snippet above, which of the following algorithms is it an implementation of? 
- [ ] merge sort
- [ ] bubble sort
- [x] quick sort
- [ ] memoization

---

#### 4. Which of the following five complexity classes has the _best performance_ for a large input?
- [x] `O(n*log(n))` - loglinear/quasilinear
- [ ] `O(n^2)` - polynomial
- [ ] `O(n^100)` - polynomail
- [ ] `O(n!)` - factorial
- [ ] `O(2^n)` - exponential

---

#### 5. Which of the following complexity classes is the "linear" complexity class?
- [x] `O(n)`
- [ ] `O(n^2)`
- [ ] `O(n^3)`
- [ ] `O(1)`

---

#### 6. Which of the following four complexity classes has the _best performance_ for a large input?
- [ ] `O(n)` - linear
- [x] `O(1)` - constant
- [ ] `O(n^3)` - polynomial
- [ ] `O(n!)` - factorial

---

```js
function sort(array, term) {
  const result = [...array];
  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result.length; j += 1) {
      if (result[i] < result[j]) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}
```

#### 7. With respect to the above function `sort`, to what complexity class does it belong?
- [ ] exponential
- [ ] constant
- [ ] linear
- [x] polynomial

---

#### 8. Which of the following abstract data types is designed as a last-in, first-out data structure?
- [ ] set
- [ ] binary tree
- [ ] queue
- [ ] list
- [ ] map
- [x] stack

---

#### 9. Which of the following abstract data types is designed as a first-in, first-out data structure?
- [ ] binary tree
- [ ] stack
- [ ] list
- [ ] map
- [x] queue
- [ ] set

---

#### 10. What is the expected time complexity for inserting a value onto a stack? 
- [x] constant time
- [ ] logarithmic time
- [ ] factorial time
- [ ] linear time

---

#### 11. Which of the following algorithmic complexity classes would you want to avoid when trying to implement any algorithm?
- [x] factorial
- [ ] loglinear/quasilinear
- [ ] logarithmic
- [ ] linear
