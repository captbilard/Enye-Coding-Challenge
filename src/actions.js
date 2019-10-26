// action type
export const ADD_USER = 'ADD USER'

//action creators
export function addUser(text){
    return{type: ADD_USER, text};
}