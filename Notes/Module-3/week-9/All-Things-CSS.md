# CSS Selectors

- **Type Selectors**: Matches elements by tag name (ie., `div`, `span`, `a`, `p`, etc)
- **Class Selectors**: Matches elements by class name (ie., `.outer-layer-2`)
- **ID Selectors**: Matches elements by ID name (ie., `#name`, `#display`)
- **Universal Selectors**: Matches elements by any type (ie., `*`)
- **Attribute Selectors**: Matches elements based on the presence of a given attribute (ie., `a[title]` matches all `a` elements with `title` attribute)

### Compound Class Selectors
Quite often, you will have elements in your HTML that have more than one class applied to them. Consider the following example:
 
```html
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
```

- `.box.yellow` would select the first `div` element
- `.box.orange`would select the middle `div` element
- `.circle.orange` would select only the last `div` element. 

Remember, there is NO SPACE between each of the `.class` portions of the compound selectors. 

### Many Selectors 
What if we wanted to italicize all `H1` and `H2` elements in the document? We can conviently apply the same styles to multiple elements by combining selectors, separated by a comma. Consider the following example:

```CSS
h1,
h2 {
  font-style: italic;
}
```

We can also combine tag selectors with ID or class selectors by writing the tag name immediately followed by the ID or class selectors. Again, we can apply the same styles to multiple elements by comma separating the selectors: 

```CSS
h1#heading,
h2.subheading {
  font-style: italic;
}
```

## CSS Rule Specificty
A CSS Rule is the collection of single or compound selectors, a curly brace, zero or more properties and their settings, and a closed curly brace. 

```css
/* A CSS Rule that removes padding and margin from the document  */
/*---------------------------------------------------------------*/
/* The selectors are "html" and "body".                          */
/* The properties are "padding" and "margin", each with value 0. */
html, body {
  padding: 0;
  margin: 0;
}
```

### The Four Number Calculation
The four numbers that the specifically calculations are in _increasing_ order of importance. 
- The number of tag selectors in the selector
- The number of class, pseudo-element, and attribute selectors in the selector
- The number of ID selectors in the selector
- Is this an inline style?

(Hopefully you dont' put inline styles in your HTML, so you can ignore that last one and focus on the first three). 

# Combinators
Combinators are a type of CSS selector that _combine_ other selectors into more complex or targeted selectors. 

### Descendant Selector
The Descendant Selector is represented by two selectors with just white space inbetween (`A [space] B`). This will select any element B that is a descendent of the first element A. Considering the following example: 

```css
p abbr {
  text-transform: uppercase;
}
```

Which would result in:

```html
<body>
    <p>
      <span>Acronyms:</span>
      <abbr title="HyperText Markup Language">html, this will be styled</abbr>
      <abbr title="Cascading Style Sheets">css, this will be styled</abbr>
    </p>
    <span>More Acronyms:
      <abbr title="National Aeronautics and Space Administration">nasa, this will NOT be styled</abbr>
      <abbr title="Unidentified Flying Object">ufo, this will NOT be styled</abbr>
    </span>
    <p>
      <span>Even More Acronyms:</span>
      <ul>
        <li><abbr title="Graphics Interchange Format">gif, this will be styled</li></abbr>
        <li><abbr title="Technology, Entertainment, Design">ted, this will be styled</li></abbr>
      </ul>
    </p>
  </body>
```

### Direct Child Selector
The Direct Child Selector is presented by two selectors with `>` inbetween them (`A > B`). It will match every element B that is immediately nested inside an element A. This is different than the descendant selector because it selects only the direct children of an element. Consider the following example:

```css
.menu > .is-active {
  background-color: #ffe0b2;
}
```

Which would result in:

```html
<body>
  <div class="menu">
    <div class="is-active">
      Belka, this one is styled.
    </div>
    <div>
      <div class="is-active">
        Strelka, this one is  NOT styled. 
      </div>
    </div>
  </div>
  <div class="is-active">
    Laika, this one is NOT styled. 
  </div>
</body>
```

### Adjacent Sibling Selector
The Adjacent Sibling is presented by two selectors with `+` inbetween them (`A + B`). This means that the second element B directly follows the first A, and both share the same parent. Consider the following examples:

```css
h1 + h2 {
  font-style: italic;
}
```

Which would result in: 

```html
<h1>Big header</h1>
<h2>This one is styled because it is directly adjacent to the H1</h2>
<h2>This one is NOT styled because there is no H1 right before it</h2>
```

# Pseudo-Classes
A pseuo-class specifies a special state of the selected elements and does not refer to any elements or attributes contained in the DOM (hence, pseudo). A pseudo-class is formed by the selector followed by `:` followed by the pseudo-class name (`A:B`).

If we want to style all anchor tags (`a`) only when the mouse is over the content of the anchor tag (`:hover`), consider the following example: 

```css
a:hover {
  font-family: "Roboto Condensed", sans-serif;
  color: #4fc3f7;
  text-decoration: none;
  border-bottom: 2px solid #4fc3f7;
}
```

Check out the MDN doc on [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) for a full list of pseudo-classes we can use with CSS selectors. 

# Pseudo-Selectors
Like pseudo-classes, pseudo-selectors select pseudo elements in the DOM. The two that you will use most often are the `::after` and `::before` pseudo-selectors. Both of them create a pseudo-element as a child of the elemtn to which the property applies. 
- The `::after` variation creates the child as the last child of the selected element.
- The `::before` variation creates the child as the first child of the selected element.

For example, if you wanted to put happy faces (`:-)`) at the beginning of all paragraphs, then you could do this:

```css
 p::before {
    background-color: lightblue;
    border-right: 4px solid violet;
    content: ':-) ';
    margin-right: 4px;
    padding-left: 4px;
  }
```

# Linking to an External Stylesheet
While we could write inline styles directly in our HTML file, the common practice is to keep CSS in an external stylesheet linked to an HTML file. 

Whenever you want to add an external stylesheet, make sure to add it inside of the `<head>` tag and use the `<link>` tag. 

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
  </head>
  <body>
  </body>
</html>
```
