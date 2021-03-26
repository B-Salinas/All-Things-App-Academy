# App.js

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

// a routes page for multiple routes
// const routes = require('./routes'); // doesn't need file extension

const app = express();

const port = 8080; // or whatever localhost port number

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const csrfProtection = csrf({ cookie: true });

// Routes go here, but if you have a LOT of routes,
// you can put them on another page and 'require' them.

app.listen(port, () => console.log(`Listening on port ${port} ...`)); // displays on the terminal
```
