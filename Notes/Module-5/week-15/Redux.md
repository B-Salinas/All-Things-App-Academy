Redux is a JavaScript Framework for managing the frontend state of a Web Application. It allows us to store information in an organized matter and to quickly retrieve that information from anywhere in a web app. 

**Advantages of Redux**:
- simplifies some of the more cumbersome aspects of Flux
- very lightweight, the library only takes up 2 kbs
- very fast, the time to insert or retrieve data is low
- predictable, interacting with the data store in the same way repeatedly will produce the same effect.

# Philosophy of Redux

The guiding philosophy of Redux is the idea that in a software library, restrictions can be just as important as features. Redux deliberately places significant restrictions on the way state can be stored and updated, but in return it allows easy implementation of a number of powerful features that would be extremely difficult to write using a less restrictive framework. 

### 1. Single Source of Truth 
The state for an entire Redux app is stored in a single, plain JavaScript object (POJO).

### 2. State is Read Only
The state object cannot be directly modified. Instead it is modified by dispatching actions.

### 3. Changes Are Made with Pure Functions
The reducers that recieve the actions and return updated state are pure functions of the old state and the action. 

# Vocabulary 

**State**  
All the information stored by that program at a particular point in time. The job of Redux is to store the state of your app and make it available to your entire app.
- Generally, the _state_ of a program is used to refer to the data stored by the program at a particular instance in time, as opposed to the logic of the program, which doesn't change over time. 

**Store**  
A single JavaScript object with a few methods, including `getState`, `dispatch(_action_)`, and `subscribe(_listener_)`. 
- Any state you want Redux to handle is held in the store.

**Action**  
An action is a plain old JavaScript object with a `type` property. Actions contain information that can be used to update the store. They can be _dispatched_ (sent to the store) in response to user actions or AJAX requests. 
- **Action Creators**: Functions that return actions. They can take arguments which allow them to customize the data contained in the actions they generate.

**Pure Functions**  
A function is pure if its behavior depends only on its arguments and has no side effects -- this means the function can't depend on the value of any variables that aren't passed into it as arguments and it can't alter the state of the program / any variable existing outside itself. 
- Simply takes in arguments and returns a value. 

**Reducer**    
A reducer is a function that is called each time an action is dispatched. The reducer receives an action and the current state as arguments and returns an updated state. 
- Redux reducers are required to be pure functions of the dispatched action and the current state -- this makes their behavior very predictable and allows their effects to potentially be reversed. 

**Middleware**  
An optional component of Redux that allows custom responses to dispatched actions. When an action is dispatched, it passes through each middleware that has been added to the state. The middleware can take some action in response and choose whether or not to pass the action on down the chain. 
- The middleware actually replaces the dispatch method of the store with a customized version. The most common use of middleware is to dispatch asynchronous requests to a server.

**Redux DevTools**  
The Redux DevTools can be added as a middleware to any Redux project and allow you to look back through history of the state and toggle past actions on and off to see a live recalculation of the state. This ability to revert to a previous state is what is meant by "time travel".

**Thunks**  
Thunks are an alternative approach to the traditional approach to middleware. In Redux, a thunk action creator returns a function rather than an object. Thunks are most commmonly used to make asynchronous API requests.

![Reducer Process](reducer.gif)
