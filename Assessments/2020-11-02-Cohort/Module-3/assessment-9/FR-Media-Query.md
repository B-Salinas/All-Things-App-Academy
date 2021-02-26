# Media Query

```css
.tree {
  display: inline-block;
  width: 600px;
}
```

#### 1. Given the above CSS, write a media query that would change elements that have the tree class to widths of "100%" and display types of "block" for viewports widths less than or equal to 600px.
> @media screen and (max-width: 600px) {
  .tree {
    display: block;
    width: 100%;  
  }
}
