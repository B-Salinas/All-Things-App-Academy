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

- If you exported using `export default`, you do not have to "deconstruct" in the file you are importing that function/class/etc, and you can rename it whatever you want. 
- If you exported using `export`, you have to deconstruct in the imported file and both the named export import have to exactly match. 

```js
import className from './some/path'; // className was exported using the `export default` keyword, so we do not deconstruct

import { functionName } from './some/other/path' // functionName was exported using the `export` keyword, so we have to deconstruct
```

We can use an `*` to import an entire Module's contents (what has been exported using `export` or `export default`). 

```js
import * as things from './path' // We must alias our imported object using an 'as' keyword to be able to refer to it later

things.methodName() // whatever methodName does, which was exported from '.path' 
```

You can also use aliasing to rename identically named functions or items from different files.

```js
import { functionName as f1 } from './path1'

import { functionName as f2 } from './path2'
```
