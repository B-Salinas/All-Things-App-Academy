#### 1. Which of the following HTTP requests types will never have a body?
- [ ] POST
- [ ] PATCH
- [ ] PUT
- [x] GET

---

#### 2. An HTTP request can have up to three parts. Choose those three parts from the following options.
- [x] a request line
- [x] body
- [x] headers
- [ ] a response code

---

#### 3. What are the three states that a Promise can be in?
- [x] pending 
- [ ] inconsistent
- [x] fulfilled
- [x] rejected

---

#### 4. What does the range HTTP status codes from 500 - 599 indicate?
- [ ] informational
- [x] server error
- [ ] redirection
- [ ] client error

---

#### 5. Identify which function is invoked before every test within the same `describe` block?
- [x] `beforeEach`
- [ ] `before`
- [ ] `afterEach`
- [ ] `after`

---

#### 6. What is the meaning of HTTP status code 200?
- [ ] MOVED TEMPORARILY
- [ ] BAD REQUEST
- [x] OK
- [ ] ACKNOWLEDGED

---

#### 7. What does a Promise represent?
- [x] that you may get a value or error at some point in the future
- [ ] a guarantee that your program will never have any errors
- [ ] that you will not get a `null` back
- [ ] that you will immediately get an object

---

![TDD Workflow](tdd-workflow.png)

#### 8. Given the above image as reference, identify the steps of the TDD workflow _in order_:
- [ ] Red, Green, Rework
- [ ] Green, Red, Rework
- [x] Red, Green, Refactor
- [ ] Red, Refactor, Green

---

#### 9. In an HTTP request, what is the "Host" header used to specify?
- [ ] the name of the programming language that hosts the code
- [x] the name of the server to which we're making the request, usually the "domain" name 
- [ ] the name of the person that created the Web page
- [ ] the name of the company that hosts the Web page

---

#### 10. Which of the following descriptions would throw a JavaScript `SyntaxError`?
- [ ] the code references a non-existent variable
- [ ] trying to invoke a variable that hasn't been assigned a value
- [x] the code has an extra bracket `{`
- [x] a function is declared using `function`
- [ ] the code returns a variable but misspells the variable name

---

#### 11. What are the two "chainable" methods on a Promise that allow you to use it?
- [ ] `try`
- [x] `then`
- [x] `catch`
- [ ] `when`

---

#### 12. Which of the following are valid HTTP "verbs" (or "methods")?
- [x] PUT
- [x] POST
- [ ] PITCH
- [ ] TAKE

---

#### 13. What does the "Content-Type" header in HTTP requests and responses indicate?
- [x] the type of content found in the body of the HTTP message
- [ ] the type of content found in the headers of the HTTP message 
- [ ] the type of content that the browser will accept for the HTTP request
- [ ] the type of content that the server must have in its database

---

#### 14. Which of the following does HTTP stand for?
- [ ] Hypercard Throughput Turnover Protocol
- [x] HyperText Transfer Protocol
- [ ] Hyperlink Tracking Testing Protocol
- [ ] HyperText Textual Protocol

---

#### 15. What is the meaning of the HTTP status code 404?
- [x] NOT FOUND
- [ ] MOVED TO ANOTHER SERVER
- [ ] GOOD REQUEST
- [ ] CREATED

---

#### 16. Which of the following is a syntactically correct request-line for an HTTP request, that is, the first line of an HTTP request? 
- [ ] `HTTP/1.1 READ`
- [x] `GET / HTTP/1.1`
- [ ] `GET {} HTTP/4.0`
- [ ] `READ / HTTP/1.1`

---

```js
function logLater(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

logLater('Hello', 1000)
  .then(() => logLater('Good bye', 5000));
```

#### 17. Given the above code, what will you see when you run it? 
- [ ] the message "Hello", a sex second delay, the message "Good bye"
- [x] a one second delay, the message "Hello", a five second delay, the message "Good bye"
- [ ] the message "Hello", a one second delay, the message "Good bye", a five second delay
- [ ] the message "Hello", the message "Good bye", and a six second delay
