# Redux

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

Always need to return a value from a reducer. 
If you return undefined as an initial value, Redux will assume you made an error.
Can return null.

# Redux + RN

## Provider
Provider translates the data in the store into something that can be used by the react side of app.
redux wasn't designed specifically for react, it works with other things.

react-redux library is the communication glue between redux and react.

the provider component can only have one child.

## Connect
Connect helper function is how you get access to redux state from RN components.
In bottom of RN component, call connect, which accesses the global state and can pass it into the RN component as a prop
```javascript
export default connect((mapStatetoProps)(LibraryList);
```
This helper function is also how you bind action creators to a RN component.

mapStatetoProps is always first argument to connect().
If don't want to use, then have to pass in null.
To bind action creators to a RN component, first import them to the component:
```javascript
import * as actions from '../actions';
```
Then bind them
```javascript
export default connect(null, actions)(ListItem);
```
This does 2 things:
1. dispatches all the actions to the redux store
2. passes the actions to the component as props.

## MapStatetoProps

The use of mapStatetoProps really goes beyond what we already described. mapStatetoProps actually has 2 arguments,
state and ownProps.
```javascript
const mapStatetoProps (state, ownProps) => {}
```
ownProps are the props that were passed to the component that we're wrapping.

whenever our application state changes, our mapStatetoProps function will re-run, pass in a new set of props to our component,
which causes our component to re-render

## Flow of Redux + RN

### Flow of Initial Render

1.

When app first boots up, this is run from app.js:
```javascript
<Provider store={createStore(reducers)}>
```
This runs the index.js file.

index.js file is defined in /reducers, along with all of your reducers.
The index file uses the function combineReducers() to attach the reducer functions
to the global state.
full index.js file looks like this with one reducer, LibraryReducer.

```javascript
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});
```
This creates a key of libraries in state and assigns it the output of the LibraryReducer function.
Here our LibraryReducer function just imports data and exports a function that always outputs the data.
full file below.
```javascript
import data from './LibraryList.json';

export default () => data;
```

initial state object when app first boots up is an object with a key of libraries,
and a value of the list of libraries output from LibraryReducer().
This state is stored as a prop in the provider.

2.

Next the following is executed from app.js:
```javascript
<LibraryList />
```
This calls the LibraryList component. The function LibraryList itself does nothing:
```javascript
class LibraryList extends React.Component {
    render() {
        return (<View />);
    }
}
```
However, we can access the state using the connect function.
When the LibraryList component is about to be rendered, the connect function is called.
The connect function accesses the state from the provider.
It then passes the state into the mapStatetoProps function.
```javascript
export default connect(mapStatetoProps)(LibraryList);
```

If I return an object from mapStatetoProps, that object will show up as a prop in the RN component.
```javascript
const mapStatetoProps = (state) => {
   return { librariesPassed: state.libraries };
};

class LibraryList extends React.Component {
    render() {
        console.log(this.props.librariesPassed);
        return (<View />);
    }
}

```
![Here's an image to convey the same flow](https://user-images.githubusercontent.com/12001721/30944649-acbfb0a4-a3cf-11e7-84d4-e0995e74556c.PNG)

### Flow of Response to User Input

Whenever we touch a title, we pass that title's id into selectLibrary.
selectLibrary is an action creator that has been binded to the component through the connect() method.
```javascript
<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
```
when selectLibrary is called, the connect method dispatches the action, which causes all the reducers to re-run.
```javascript
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
```
one reducer will be effected by this, the SelectionReducer.
```javascript
export default (state, action) => {
    if (action.type === 'select_library') { return action.payload; }
    return state || null;
};
```
This will recalculate the state.
Any time state is updated, mapStatetoProps is re-run automatically.
This passes in a new set of props to our component, which causes our component to re-render.

# Lists

In music app, used .map() to convert a list of data objects into a list of components. 
This approach works on a few items, but once you start to scale, this performance will be bad.
If we had 100 albums to show, using the map method would create 100 components in memory ready to show
the instant we create our list.

## FlatList
Better method- RN's FlatList.
FlatList figures out what items in the list are currently visible to the user, then creates a component
only for the items which should be visible on the screen. It only renders this subset of the list.

As user scrolls down, the component which disappears from the top of the screen gets added to the bottom of
the screen, and the next item coming into view gets added to that component. So the number of components
rendered remains the same, but the data in those components gets changed. 

# Animation

Animation is super easy.
just grab LayoutAnimation from 'react-native'
```javascript
import { LayoutAnimation } from 'react-native';
```
put the componentWillUpdatate() lifecycle method at the top of your component, and call LayoutAnimation from there:
```javascript
class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
```
componentWillUpdate() is a lifecycle method that is called right before the componenet is re-rendered to the screen.

# Styling

By default, lists and scrollviews will be cut off at the bottom. this is caused by the View tag that wraps the list.
```javascript
<View>
    <LibraryList />
</View>
```

Use this to correct for it:
```javascript
<View style = {{ flex: 1}}>
    <LibraryList />
</View>
```
Note that there are 2 curly braces above. 1 is for JSX, the other is to designate a JS object.

# Misc

## ES Lint

Always need to create a file in the project directory called .eslintrc which contains the following code:
```javascript
{
    "extends": "rallycoding"
}
```

## JSON
needs double quotes

## bind(this)

only need to bind(this) when we make reference to 'this' inside of the callback function

## nav

use two dots to go up a level
```javascript
import myComponent from '../'
```

give me everything that was exported from the actions file and assign it to the variable actions
```javascript
import * as actions from '../actions';
```