#### 1. Which of the following algorithmic complexity classes would you want to avoid when trying to implement any algorithm?
- [ ] logarithmic
- [x] factorial
- [ ] linear
- [ ] loglinear/quasilinear

#### 2. Which of the following four complexity classes has the _best performance_ for a large input?
- [ ] `O(n<sup>3</sup>)` - polynomial
- [x] `O(1)` - constant
- [ ] `O(n!)` - factorial
- [ ] `O(n)` - linear

#### 3. Which of the following abstract data types is designed as a first-in, first-out (FIFO) data structure?
- [ ] stack
- [x] queue
- [ ] map
- [ ] list
- [ ] set
- [ ] binary tree

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

#### 4. In the code snippet above, which of the following algorithms is it an implementation of?
- [ ] bubble sort
- [ ] memoization
- [x] quick sort
- [ ] merge sort

#### 5. What is the expected time complexity for inserting a value onto a stack?
- [ ] logarithmic time
- [x] constant time
- [ ] factorial time
- [ ] linear time

```js
function find(array, term) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === term) return true;
  }
  return false;
}
```

#### 6. With respect to the above function `find`, to what complexity class does it belong? 
- [ ] polynomial
- [ ] exponential
- [x] linear
- [ ] constant

#### 7. Which of the following five complexity classes has the _best performance_ for a larger input?
- [ ] `O(2^n)` - exponential
- [ ] `O(n^100)` - polynomial
- [ ] `O(n!)` - factorial
- [ ] `O(n^2)` - polynomial
- [x] `O(n*log(n))` - loglinear/quasilinear

#### 8. Which of the following complexity classes is the "linear" complexity class?
- [x] `O(n)`
- [ ] `O(1)`
- [ ] `O(n^2)`
- [ ] `O(n^3)`

#### 9. Which of the following complexity classes does the unsimplified `T(n^3 + n*log(n))` simplify to?
- [x] `O(n^3)`
- [ ] `O(n!)`
- [ ] `O(n*log(n))`
- [ ] `O(1)`

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

#### 10. With respect to the above function `sort`, to what complexity class does it belong?
- [ ] linear
- [ ] exponential
- [x] polynomial
- [ ] constant

#### 11. Which of the following abstract data types is designed as a last-in, first-out (LIFO) data structure?
- [x] stack
- [ ] list
- [ ] set
- [ ] binary tree
- [ ] map
- [ ] queue
