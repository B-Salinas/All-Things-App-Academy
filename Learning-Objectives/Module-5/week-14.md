# React Basics

#### 1. Explain how React uses a tree data structure called the virtual DOM to model the DOM
The virtual DOM is a copy of the actual DOM tree. Updates in React are made to the virtual DOM. React uses a diffing algorithm to reconcile the changes and send them to the DOM to commit and paint.

#### 2. Create virtual DOM nodes using JSX
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

#### 3. Describe how JSX transforms into actual DOM nodes
#### 4. Use the `ReactDOM.render` method to have React render your virtual DOM nodes under an actual DOM node
#### 5. Attach an event listener to an actual DOM node using a virtual node
#### 6. Use `create-react-app` to stand up a new React application and import needed assets
#### 7. Construct a custom 'create-react-app' template and use it to start a new application

# React Components

#### 1. Provide default values for a React component's props
#### Pass props into a React component
#### Use debugging tools to determine when a component is rendering
#### Destructure props

# React Router

#### Create routes using components from the `react-router-dom` package
#### Generate navigation links using components from the `react-router-dom` package
#### Use React Router params to access path variables
#### Use React Router history to programmatically change the browser's URL
#### Redirect users by using the `<Redirect>` component

# React Hooks

#### Use the `useState` hook to manage a component's state.
#### Use the `useEffect` hook to trigger an operation as a result of a _side effect_.
#### Initialize and update state within a function component.
#### Describe the three ways in which a re-render can be triggered for a React component.
#### Optimize your application's performance by using `useCallback` and `useRef`.
#### Use debugging tools to understand and resolve issues with re-renders.

# React Forms

#### Create a React component containing a form.
#### Define a single event handler method to handle `onChange` events for multiple form inputs.
#### Construct a form that can capture user data using common form inputs.
#### Describe a controlled input.
#### Implement form validations.
#### Handle form submission.

# React Context

#### Create a React wrapper component
#### Share and manage global information within a React application using Context
#### Create a React provider component that will manage the value of a Context
#### Retrieve values from a Context throughout your application
#### Describe the relationships between provider, consumer, and context