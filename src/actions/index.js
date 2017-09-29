// actions/index.js will always locate all of the differnt action creators for the project

//selectLibrary is an action creator.
//an action creator is a function which creates an action.
//An action is a JS Object which has to at least have one property called type.
//An action is how we cause our reducers to update the data that they produce
//Whenever we call this action creator, the returned action will be automatically dispatched for us
//and sent off to all of the different reducers.

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
