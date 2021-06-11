The **store** is the central element of Redux's architecture. It holds the global **state** of an application. The store is responsible for updating the global state via its **reducer**, broadcasting state updates via **subscription**, and listening for **actions** that tell it when to update the state.

## Managing State
The Redux store manages the global state of the application. You should only read and update the global state through the store. The store can also trigger functions to be called whenever the state is updated.

The store is responsible for:

1. Returning the current state
2. Updating the state
3. Notify subscribed components (call functions) whenever the state gets updated

### Store Methods
- `getState()` - Returns the store's current state.
- `dispatch(_action_)` - Passes an action into the store's reducer telling it what information to update.
- `subscribe(_callback_)` - Registers a callback to be triggered whenever the store updates. Returns a function, which when invoked, unsubscribes the callback function from the store.
