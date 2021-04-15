use effect vs use state
 - syntax
  - useState 
    - takes in initial state
    - returns twople/ two elements in an array
  - useEffect 
    - takes in callback as 1st arg, and dependencies as second arg
 - usage
  - "local state", state is the data the component/part of our app needs to be able to do it's job
  - useEffect is how we add functionality to our component
 - when they're evaluated in React

  - useState callback function(setName) fires with new info
    - reassign the variable that the callback is managing
  - see the component re-render
    - placing elements on the page(making the decision)
  - use effect callback being evaluated

props

components are functions, and props are arguments

## what will trigger a re-render in React

  - if the local state changes(and we're using that state)
  - if the props change 
    - if new arguements get passed to a func, the func gets re-run
  - when the parent re-renders
    - this is because a child appears in the return/render and that JS function gets re-invoked

