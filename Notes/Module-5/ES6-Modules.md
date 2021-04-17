# Exporting

- `export default` allows you to export a single item per file. 
  - It is the equivalent of using `module.exports` in CommonJS to directly export **one** item from a file. 
- `export` keyword allows you to export mulitple items per file. 

The preferred method to export multiple functions / classes from a single file is to export each function / class as it's defined. 

```js
export class className {
  // ...
}

export function functionName() {
  // exported functions must be written in function declaration syntax ...
}

export const variableName = () => {
  // ... or as fat arrow functions
}
```

# Importing

The `import` statements must always be at the top of the file because imports have to occur before the rest of the file's code runs. 

- If you exported using `export default`, you do not have to "deconstruct" in the file you are importing that function/class/etc 