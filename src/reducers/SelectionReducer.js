export default (state, action) => {
    console.log(action.payload);
    return action.payload || null;
};
