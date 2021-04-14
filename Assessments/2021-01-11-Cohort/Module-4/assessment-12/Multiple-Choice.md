#### 1. What does JWT stand for?
- [ ] JSON Web Task
- [x] JSON Web Token
- [ ] JSON Web Totem
- [ ] JSON Web Talisman 

---

#### 2. Which of the following are examples of applying authorization?
- [x] denying access to a resource to a known actor because they do not have permissions
- [ ] the process of registering an account for an actor
- [ ] the process of identifying an actor given known credentials
- [x] the process of checking privileges for an identified actor

---

#### 3. Which of the following Express middleware packages lets you extract bearer tokens from a request?
- [ ] `bearer-token-extract`
- [ ] `bearer-token-express`
- [x] `express-bearer-token`
- [ ] `extract-bearer-token`

---

#### 4. In RESTful APIs, how would you translate the HTTP request `GET/books HTTP/1.1`?
- [ ] removes a book from the user's bookshelf
- [x] get a list of all books that the user is allowed to see
- [ ] create a book that the user has read
- [ ] get one book that the user is allowed to see

---

#### 5. Which of the following RFCs covers the RESTful standard?
- [ ] RFC 1918
- [ ] RFC 3372
- [x] There is no RESTful standard
- [ ] RFC 6719

---

#### 6. What is authentication? 
- [ ] denying access to a resource to a known actor because they do not have permissions
- [x] the process of identifying an actor given known credentials
- [ ] the process of checking privileges for an identified actor 
- [ ] the process of registering an account for an actor

---

#### 7. Which of the following hash algorithms are recommended for use to hash passwords to store them at rest, like in a database?
- [ ] md5
- [ ] SHA1
- [x] Bcrypt
- [x] Argon2
- [x] PBKDF2

---

#### 8. Which of these cannot be used to store data the user might want to access later?
- [x] SHA256 hashing
- [ ] Symmetric key encryption
- [ ] Asymmetric key encryption
- [ ] Base-64 encoding

---

#### 9. Which of the following Express built-in middleware objects will allow you to parse the body of an HTTP request that contains data formatted in the _application/json_ format?
- [x] `express.json()`
- [ ] `express.applicationJson()`
- [ ] `express.static()`
- [ ] `express.bodyParser()`

---

#### 10. What is OAuth?
- [ ] an open-source package for secure login services
- [ ] a password exncryption protocol
- [ ] a secure hashing algorithm
- [x] a protocol for authenticating users via a trusted 3rd party 

---

#### 11. If you have middleware function named `checkThis` that you would like to register for a particular route, which of the following would allow you to do this in Express?
- [ ] `app.get(checkThis, '/widgets', (req, res) => { ... });`
- [x] `app.get('/widgets', checkThis, (req, res) => { ... });`
- [ ] `app.get('/widgets', (req, res) => { ... }, checkThis);`
- [ ] `app.get('/widgets', (req, res) => { ... }).apply(checkThis);`

---

#### 12. What does Bcrypt do?
- [ ] enforces password strength
- [ ] encrypts passwords
- [x] hashes passwords
- [ ] secure communications with OAuth servers

---

#### 13. What are the three sections of a JWT?
- [x] payload (or claims)
- [x] header
- [ ] hashing function
- [x] signature

---

#### 14. Which of the following paths is a "single-resource" path as described by the RESTful conventions?
- [x] `/cars/17`
- [x] `/products/29183-eyelash-curler`
- [ ] `/books/38229/pages`
- [ ] `/unguents`

---

#### 15. What Express middleware package in NPM helps you implement Cross-Site Resource Sharing?
- [ ] `express-node-cors`
- [ ] `corsjs`
- [ ] `coors-lite`
- [x] `cors`

---

#### 16. Which of the following is NOT a function of auth tokens?
- [ ] Authorization
- [ ] Authentication
- [x] Decryption
- [ ] Identification

---

#### 17. In RESTful interactions, what does the PUT HTTP verb signify?
- [ ] read a resource
- [x] update a resource
- [ ] get a resource
- [ ] delete a resource

---

#### 18. How many keys are used in _asymmetric_ encryption?
- [x] 2
- [ ] 4
- [ ] 0
- [ ] 1

--- 

#### 19. What is the purpose of cryptographic salt?
- [ ] acts as a decoy for malicious actors
- [x] protects against rainbow attacks
- [ ] adds special characters to weak passwords
- [ ] used to decrypt hashed passwords

---

#### 20. Which of these best describes a Rainbow Attack?
- [x] a brute-force search of common password hashes
- [ ] a keystroke attack to capture a user's password input
- [ ] a distributed attack to determine cryptographic salts
- [ ] a concurrent attack on the seven OSI networking layers

---

#### 21. What is the purpose of a JWT signature?
- [ ] allows the payload to be decoded
- [ ] provides redundancy in case of data corruption
- [ ] holds the JWT's cryptographic salt
- [x] verifies the origin of the JWT

---

#### 22. What does ReST stand for?
- [ ] representative State Tagging
- [ ] Really Strong Tea
- [ ] Representational Status Transitions
- [ ] Represents Stateful Transactions
- [x] Representational State Transfer
