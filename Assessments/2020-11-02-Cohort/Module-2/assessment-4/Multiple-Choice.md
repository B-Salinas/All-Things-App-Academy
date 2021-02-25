#### 1. What does the `getElementByID` method do?
- [x] returns a single element that matches the provided id or `null` if there is no match
- [ ] returns the last element in the document
- [ ] returns the element when the matching set of uncoordinated instinctual desires
- [ ] returns _all_ elements that match the provided id or an empty list if there is no match

---

#### 2. What are the two methods on the `localStorage` object that allow you to read and write data?
- [ ] `get` and `set`
- [ ] `read` and `write`
- [x] `getItem` and `setItem`
- [ ] `getKey` and `setKey`

---

#### 3. Which of the following strings are valid JSON?
- [ ] `"["hippo", "ninja", "aardvark"]"`
- [ ] `"{ name: \"Max\", species: \"dog\", age: 5 }"`
- [x] `"6.28"`
- [x] `"true"`
- [x] `"null"`
- [x] `"{}"`

---

#### 4. Which of these is true for `localStorage` in the window?
- [ ] data stored in local storage gets cleared when a browser tab or window is closed
- [x] data stored in local storage can persist from page to page of a website 
- [x] data stored in local storage has no expiration date
- [x] data in local storage is stored in key-value pairs
 
---

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <main id="main-street">
    <section id="section-eight">
      <header id="mind-the-shelf">
        <p id="para-what">
          Hello
        </p>
      </header>
    </section>
  </main>

  <script>
    function writeId(e) {
      console.log(e.currentTarget.id);
    }
    document.querySelector('main').addEventListener('click', writeId);
    document.querySelector('header').addEventListener('click', writeId);
    document.querySelector('p').addEventListener('click', writeId);
  </script>
</body>
</html>
```

#### 5. Pay attention to the elements that have event listeners. When someone clicks on the word "Hello" in the browser, what words will they see in their console?
- [ ] main-street, section-eight, mind-the-shelf, para-what
- [ ] main-street, mind-the-shelf, para-what
- [x] para-what, mind-the-shelf, main-street
- [ ] p, header, section, main
- [ ] para-what, mind-the-shelf, section-eight, main-street
- [ ] main, section, header, p

---

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    document
      .getElementById('message')
      .innerHTML = 'Hello, Programmers!';
  </script>
</head>
<body>
  <div id="message"></div>
<body>
</html>
```

#### 6. How can you fix the above code to show "Hello, Programmers!"?
- [ ] what do you mean? Everything's fine with it
- [ ] change the ID from "message" to "Message"
- [x] wrap the JavaScript in a DOMContentLoaded event handler
- [ ] add another "div" to the body

---

#### 7. Which of the following is the event fired by the browser when it has parsed the HTML and made it available to JavaScript to interact with through the DOM?
- [ ] HTMLParsed
- [x] DOMContentLoaded
- [ ] DOMContentParsed
- [ ] DOMTreeUpdated

---

#### 8. What kind of selectors does `querySelector` and `querySelectorAll` take as arguments?
- [ ] JavaScript selectors 
- [x] CSS selectors
- [ ] HTML selectors

---

#### 9. What are the two methods on the JSON object that allow you to serialize and deserialize data?
- [ ] `unparse` and `parse`
- [ ] `serialize` and `deserialize`
- [ ] `stringify` and `unstringify`
- [x] `stringify` and `parse`

---

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <button id="click-me">Click me</button>

  <script>
    document
      .getElementById('click-me')
      .addEventListener('click', evt => {
        evt.target.innerHTML += '!';
      });
  </script>
<body>
</html>
```

#### 10. After a person clicks the "Click me" button in their browser two times, what do you they see? 
- [ ] a button that reads "Click me!"
- [ ] a button that reads "Click me"
- [ ] a button that reads "!!"
- [x] a button that reads "Click me!!"
- [ ] a button that reads "!"

