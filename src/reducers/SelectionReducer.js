//reducers automatically update the state with the value that they return.

export default (state, action) => {
    //console.log(action.payload);
    if (action.type === 'select_library') { return action.payload; }
    return state || null;
};
