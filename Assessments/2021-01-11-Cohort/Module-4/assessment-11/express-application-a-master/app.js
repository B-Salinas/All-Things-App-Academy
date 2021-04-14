/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const { EntreeType, Entree } = require('./models');

const port = process.env.PORT || 8081;
const app = express();

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/entrees/new', csrfProtection, asyncHandler( async (req, res) => {
  const eTypes = await EntreeType.findAll();
  res.render('new-entrees', { csrfToken: req.csrfToken(), eTypes });
}));

app.post('/entrees', csrfProtection, asyncHandler( async (req, res) => {
  const { name, description, price, entreeTypeId } = req.body;

  await Entree.create({
    name,
    description,
    price,
    entreeTypeId
  });

  res.redirect('/');
}));

app.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const entrees = await Entree.findAll({ include: EntreeType });
  res.render('entrees-table', { entrees });
}));



app.listen(port, () => {
  console.log(`Example app listening at port ${port}...`);
});


/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
