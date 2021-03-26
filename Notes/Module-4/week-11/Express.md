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

# Routes.js
**NOTE:** Not all Express applications require a `routes.js`, but it does keep things cleaner. Don't forget to include `const routes = require('./routes');` at the top of your `app.js` file.

```js
const express = require('express');
const router = express.Router(); // idk why this is important, but this is what we use instead of app.use, etc

router.get('/', (request, response) => {
  response.send('This will be sent to the landing page on the localhost port number specificed.');
});
```
