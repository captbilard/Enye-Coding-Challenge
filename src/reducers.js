import {ADD_USER} from './actions'


//declares an intial state for the application
const initialState = {
    users: []
}
//state is the first argument that is compulsory, then it checks the action and then uses a switch to decide what it should do.
function userApp(state = initialState, action){
    // if(action.type === ADD_USER){
    //     return Object.assign({}, state, {users: state.users.concat(action.text)});
    // }
    // return state;
    switch (action.type){
        case ADD_USER:
            return Object.assign({}, state, {users: state.users.concat(action.text)})
        default:
            return state
    }
    
}

export default userApp