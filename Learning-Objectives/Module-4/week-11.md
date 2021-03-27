# Regular Expression

#### Define the effect of the * operator and use it in a regular expression
#### Define the effect of the ? operator and use it in a regular expression
#### Define the effect of the + operator and use it in a regular expression
#### Define the effect of the . operator and use it in a regular expression
#### Define the effect of the ^ operator and use it in a regular expression
#### Define the effect of the $ operator and use it in a regular expression
#### Define the effect of the [] bracket expression and use it in a regular expression
#### Define the effect of the - inside brackets and use it in a regular expression
#### Define the effect of the ^ inside brackets and use it in a regular expression

| Regex Symbol   | Regex Meaning                    |
|----------------|----------------------------------|
| *              | Zero or more                     |
| +              | One or more                      |
| ?              | Zero or one                      |
| {m, n}         | from m to n number of characters |
| ^              | start of input                   |
| $              | end of input                     |
| .              | any single character             |
| \              | escape a special character       |
| []             | match anything inside            |
| [a-z] or [0-9] | range of characters              |
| [^a-zA-Z]      | not these range of characters    |
| ()             | group these characters           |
| \s             | whitespace                       |
| \d             | digit                            |
| \w             | wordy (letter, digit, or \_)     |
| \S             | not whitespace                   |
| \D             | not digit                        |
| \W             | not whitespace                   |


# HTTP Full Stack 

#### 1. Identify the five parts of a URL
```
  foo://example.com:8042/over/there?name=ferret#nose
  \_/   \______________/\_________/ \_________/ \__/
   |           |            |            |        |
scheme     authority       path        query   fragment
```

#### 2. Identify at least three protocols handled by the browser
#### 3. Use an IncomingMessage object to
  - access the headers sent by a client (like a Web browser) as part of the HTTP request
  - access the HTTP method of the request
  - access the path of the request
  - access and read the stream of content for requests that have a body
#### 4. Use a ServerResponse object to
  - write the status code, message, and headers for an HTTP response
  - write the content of the body of the response
  - properly end the response to indicate to the client (like a Web browser) that all content has been written

# Express

#### 1. Send plain text responses for any HTTP request
#### 2. Use pattern matching to match HTTP request paths to route handlers
#### 3. Use the Pug template engine to generate HTML from Pug templates to send to the browser
#### 4. Pass data to Pug templates to generate dynamic content
#### 5. Use the Router class to modularize the definition of routes

# Pug

#### 1. Declare HTML tags and their associated ids, classes, attributes, and content
#### 2. Use conditional statements to determine whether or not to render a block
#### 3. Use interpolation to mix static text and dynamic values in content and attributes
#### 4. Use iteration to generate multiple blocks of HTML based on data provided to the template

# HTML Forms

#### 1. Describe the interaction between the client and server when an HTML form is loaded into the browser, the user submits it, and the server processes it
#### 2. Create an HTML form using the Pug template engine
#### 3. Use express to handle a form's POST request
#### 4. Use the built-in express.urlencoded() middleware function to parse incoming request body form data
#### 5. Explain what data validation is and why it's necessary for the server to validate incoming data
#### 6. Validate user-provided data from within an Express route handler function
#### 7. Write a custom middleware function that validates user-provided data
#### 8. Use the csurf middleware to embed a token value in forms to protect against Cross-Site Request Forgery exploits
