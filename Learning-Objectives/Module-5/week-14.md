# React Basics

### Explain how React uses a tree data structure called the virtual DOM to model the DOM
The virtual DOM is a copy of the actual DOM tree. Updates in React are made to the virtual DOM. React uses a diffing algorithm to reconcile the changes and send them to the DOM to commit and paint.

### Create virtual DOM nodes using JSX
To create a React virtual DOM node using JSX, define HTML syntax in a JS file:
```js
const hello = <h1>Hello World!</h1>
```
The JS variable `hello` is set to a React virtual DOM `h1` element with the text "Hello World!" 

You can also nest virtual DOM nodes in each other, just like you do in HTML with the real DOM. 
```js
const navBar = (
  <nav>
    <ul>
      <li>Home</li>
      <li>Profile</li>
      <li>Settings</li>
    </ul>
  </nav>
);
```

### Describe how JSX transforms into actual DOM nodes
We use `ReactDOM.render` to transfer JSX into real / actual DOM nodes. It takes a React virtual DOM node's changes and allows Babel to transpile it and send the JS changes to commit to the real DOM. 

### Use the `ReactDOM.render` method to have React render your virtual DOM nodes under an actual DOM node
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById('root');
);
```

### Attach an event listener to an actual DOM node using a virtual node
To add an event listener to an element, define a method to handle the event and associate the method with the element even you want to listen for:

```js
function AlertButton() {
  showAlert = () => {
    window.alert('Button Clicked!');
  };

  return (
    <button type='button' onClick={showAlert}>
      Click me!
    </button>
  );
}

export default AlertButton;
```

### Use `create-react-app` to stand up a new React application and import needed assets
We create the default create-react-application by typing `npx create-react-app «name of app» --use-npm` in the terminal. 
- `npx` gives us the latest version
- `--use-npm` means to use npm instead of yarn / or some other package manager

### Construct a custom 'create-react-app' template and use it to start a new application
There is a special App Academy template, which we create by using `npx create-react-app --template @appacademy/react-v17 --use-npm`.





# React Components

### Provide default values for a React component's props
You can expect `props` to be an object that has its keys and values determined by the parent components. 

### Pass props into a React component
**Props:** an object that gets passed down from the parent component to the child component. This value can be of any data structure, including a function (which is an object type).

```js
function NavBar() {
  return (
    <nav>
      <h1>Pets App</h1>
      <NavLinks hello="world"/> // Prop being passed in a component
    </nav>
  );
}

// Or you can interpolate values in JSX. 
function NavBar() {
  const world = 'world';
  return (
    <nav>
      <h1>Pets App</h1>
      <NavLinks hello={world}/> // Prop being passed in as variable
    </nav>
  );
}
```

To access props objects in another component, we pass it the props argument and React will invoke the functional component with the props object. You can pass down **as many** props keys as you want.

```js
function NavLinks(props) {
  return (
    <ul>
      <li>
        <a href='/hello'>{props.hello}</a> // accessing props objects through keys
      </li>
      // ... the rest of the code ...
    </ul>
  )
}
```

### Use debugging tools to determine when a component is rendering
We use the **React DevTools extension** as an extension in our Browser DevTools to debug and view when a component is rendering. 

### Destructure props
You can destruct the props object in the function component's parameters. 
```js
function NavLinks({ props }) {
  return (
    <ul>
      <li>
        <a href='/hello'>{hello}</a> // accessing props objects through keys
      </li>
      // ... the rest of the code ...
    </ul>
  )
}
```




# React Router

### Create routes using components from the `react-router-dom` package
1. Import the react-router-dom package using `npm i react-router-dom` command line
2. In your `Index.js`:
```js
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> Above, you imported your `BrowserRouter` with which you can wrap your entire route hierachy. This makes routing information from React Router available to all its descendent components. 

3. In the `«component».js`of your choosing (usually a top tier such as `App.js`), you can create your routes using the Route and Switch components:
```js
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

<Switch>
  <Route exact path='/'>
    <Home />
  </Route>
  <Route exact path='/users'>
    <Users />
  </Route>
</Switch>;
```

### Generate navigation links using components from the `react-router-dom` package
We create links by either using React Router's `Link` or `NavLink`. They issue an on-click navigation event to a route defined in your app's router. Either renders an `a` tag with a correctly set `href` attribute. 

**Link**
```js
import { Link } from 'react-router-dom';

<Link to='/'>Home</Link>
<Link to='/users'>Users</Link>
```

**NavLink**
```js
import { NavLink } from 'react-router-dom';

<NavLink to="/">App</NavLink>
<NavLink activeClassName="red" to="/users">Users</NavLink>
<NavLink activeClassName="blue" to="/hello">Hello</NavLink>
```
The difference between `Link` and `NavLink` is that `NavLink` has the ability to add extra styling when the path it links to matches the current path. 

### Use React Router params to access path variables
A component's props can hold information about a URL's parameters. The router will match route segments starting at `:` up to the next `/`, `?`, or `#`. Such segments are wildcard values that make up your route parameters. 

**Example:** `<Route path='/users/:userId'>`

We access these parameters in our component by using the `useParams` function from `react-router-dom`. 

```jsx
import { useParams } from 'react-router-dom';

function Example() {
  const params = useParams();
  // OR
  const { userId } = useParams(); // if params in route path is /:userId
}
```

### Use React Router history to programmatically change the browser's URL
**THIS IS IMPORTANT.** The `useHistory` hook returns a history object that has convenient methods for navigation. `useHistory` also lets you update the URL programmatically. 

We can push the user to the location of our choosing by naming the route we are pushing them too. 

```jsx
import { useHistory } from 'react-router-dom';

export default function Example() {
  const history = useHistory(); // history object is returned from useHistory hook and has various methods
  const handleClick = () => history.push('/some/url'); // pushing a new URL
}
```

### Redirect users by using the `<Redirect>` component
`<Redirect>` from the React Router helps you redirect users if you do not want to give access to the current Component/Page/Location. The component only takes one prop, `to`. When it renders, it replaces the current URL with the value of its `to` prop:

```js
import { Redirect, useParams } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const { userId } = params;

  if (Number(userId) === 0) return <Redirect to="/" />;

  return (
    <h1>Hello from User Profile {userId}!</h1>
  );
};

export default Profile;
```





# React Hooks

### Use the `useState` hook to manage a component's state.
Use the `useState` hook to preserve values in a Component between function calls. The `useState` hook is a function that takes an argument which represents a default value. The function returns an array with two indexes, `[currentState, updaterFunction]`. The default state can be of any data structure. 

#### Use the `useEffect` hook to trigger an operation as a result of a _side effect_.
Use the `useEffect` hook to tell React that your component needs to do something **after** render. `useEffect` is a function that takes two arguments, a callback function and dependency array. The callback function is the "effect". The dependency array delegates when the `useEffect` function will be invoked based on the state and/or props. React will remember the function you passed, the "effect", and call it later after performing the DOM updates. 

We use `useEffect` to control our side-effects: manually touching the DOM, timers, data fetching, subscriptions, etc.

```jsx
import { useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You have clicked the button ${count} times.`;
  }, [count]);

  return (
    <div>
      <h1>You have clicked the button {count} times</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click</button>
    </div>
  )
};
```

#### Initialize and update state within a function component.
```jsx
import { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>The count is {count}</h1>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  )
};
```

#### Describe the three ways in which a re-render can be triggered for a React component.
1. Change in state
2. Change in props
3. When Context changes
4. **NOT RECOMMENDED** `forceUpdate();

#### Optimize your application's performance by using `useCallback` and `useRef`.
We optimize performance by using `useCallback` when a function has been passed to a component where the component only needs to re-render based on its state or prop value. We want to send both a function and a value to a child component, however, the child component ONLY wants to re-render based on the value, not the function. 

Similar to `useEffect`, `useCallback` takes a callback function and a dependency array. 

```jsx
import { useCallback } from 'react';

export default function Example({ term }) {
  const hanldeClickItem = useCallback(
    (event) => console.log('You clicked me', event.target),
    [term]
  );

  return (
    <MyList term={term} onClick={handleClickItem} />
  )
};
```

#### Use debugging tools to understand and resolve issues with re-renders.

# React Forms

#### Create a React component containing a form.
#### Define a single event handler method to handle `onChange` events for multiple form inputs.

#### Construct a form that can capture user data using common form inputs.
```jsx
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <input
            placeholder='Email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <textarea
            placeholder='Comments'
            name='comments'
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

#### Describe a controlled input.
A React form input with `onChange` and `value` props.

#### Implement form validations.
Frontend Validation **DOES NOT** replace backEnd validations. We can implement form validations using vanilla.js in our component:
```jsx
const validate = () => {
  const validationErrors = [];
  if (!name) validationErrors.push('Please provide a Name');
  if (!email) validationErrors.push('Please provide an Email');
  return validationErrors;
};

// THEN 

const onSubmit = (e) => {
  e.preventDefault(); // prevents default form behavior, reload upon submission
  const errors = validate(); // creates errors array

  if (errors.length > 0) { // if we have validation errors
    setValidationErrors(errors); // Update the state to display the validation errors
  } else {
    const contactUsInformation = { // Create a new object for the contact us information
      name,
      email,
      phone,
      comments
    };
  }
  setValidationErrors([]); // clear validation errors
}
```

#### Handle form submission.
```jsx
const onSubmit = (event) => {
  event.preventDefault(); // prevents default form behavior, reload upon submission

  const contactUsInformation = { // Create a new object for the contact us information
    name,
    email,
    phone,
    comments
  };
}; // we can now make an api call to our backend to POST our information
```

# React Context

#### Create a React wrapper component
We can create a parent wrapper component that can render its children dynamically. Each React component has a props property called `children`. This is a reserved property that holds an array of all the children components wrapped by the parent component. 

#### Share and manage global information within a React application using Context
We can share global information by using the `createContext` function to create a global object. We declare and export a variable with the context to make it available to other components. `createContext` accepts an argument, which will be used as the default value. It will be overriden if context is defined inside the Provider Context. 

```jsx
import { createContext } from 'react';


export const PupContext = createContext(); // create Context object to hold our Global information

//WRAPPER COMPONENT
export default function PupProvider(props) {
  return (
    // PROVIDER
    <PupContext.Provider value={/* some value*/}>
        {props.children}
    </PupContext.Provider>;
  )
}
```
We use the wrapper to wrap a parent component with the global context. Any descendants of this component will also have access to global state.

```jsx
//index.js file
import { PupProvider } from './context/PupProvider'
import App from './App'

export default function Root() {
  return (
    <PupProvider>
      <App />
    </PupProvider>
  );
}

ReactDOM.render(<Root>, document.getElementById('root'))
```

#### Create a React provider component that will manage the value of a Context
We include the Provider Component inside the wrapper. It must included the `exact` keyword, `value` as a prop, and pass its value in any chosen data structure (which include strings, functions, objbects, etc).

#### Retrieve values from a Context throughout your application
We retrieve values from a context using the `useContext` hook and the created Context. 

```jsx
import { useContext } from 'react';
import { PupContext } from './context/PupsContext';

export default function PupsReveal() {
  const myPups = useContext(PupContext);

  return (
    <div>
      <h1>Name: {myPups.name}</h1>
    </div>
  );
}
```

#### Describe the relationships between provider, consumer, and context
- Context allows "global" data in a React application and stores a single value. 
- A context's Provider is used to wrap a React application to enable all components in the application to access the context's value. 
- A Consumer is a React component that reads a context's value. 
