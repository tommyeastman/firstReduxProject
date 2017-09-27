#Redux

[play with redux](https://stephengrider.github.io/JSPlaygrounds/)

Action- JS object which has at min 1 property, type.
specifies what you want to do (type), and can specify the input as well (payload)
Reducer - Function which takes in action and produces state
State - output
Store - holds reducer and state.

Ex: want to split a string into an array of characters.
Returns empty array:

```javascript
const reducer = (state,action) => {
	return [];
};

const store = Redux.createStore(reducer);

store.getState();
```
Returns ["s","p","l","i","t","t","h","i","s"]

```javascript
const reducer = (state,action) => {
	if(action.type==='tomSplitString'){
  	return action.payload.split('');
  };
};

const store = Redux.createStore(reducer);

const action = {
	type: 'tomSplitString',
  payload: 'splitthis'
};

store.dispatch(action);

store.getState();
```

Redux helps you scale applications.
How?
Actions allow us to make predictable changes to the state of our application
we will never reach into our store and mess with its state.
instead we will create an action
actions modify our state in one very particular way
this means we can only modify our state in a finite number of ways.
in our example, we know our state will only ever be an empty array or an array of strings.

each time we dispatch an action, we are making an incremental change to the state of our app.
don't mutate the state in a reducer, recreate it.
this will run but is wrong:
```javascript
const reducer = (state,action) => {
    if (action === 1){
        return action.payload;
    } else if (action===2){
        state.push(action.payload)
        return state;
    }
}
```

this is right. (es6 code)
it creates a new array, puts all the elements in the current state array in there, then adds action.payload to the end.
this is right because it creates a new array, doesn't modify or mutate the existing state.
```javascript
const reducer = (state,action) => {
    if (action === 1){
        return action.payload;
    } else if (action===2){
        return [ ...state, action.payload ];
    }
}
```

create store, load it with one or more reducers, reducers produce state,
if we dispatch an action from that store it will be sent to each reducer and it will
generate a new copy of state for our app.

#ES Lint

Always need to create a file in the project directory called .eslintrc which contains the following code:
```javascript
{
    "extends": "rallycoding"
}
```
provider translates the data in the store into something that can be used by the react side of app.
redux wasn't designed specifically for react, it works with other things
react-redux library is the communication glue between redux and react.

the provider component can only have one child.