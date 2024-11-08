import { ADD_TODO, ADD_USER } from "./constants.js";

export function CreateTodoActionCreator(Todo){
    return {
        type: ADD_TODO,
        payload:Todo
    }
}
export function RemoveTodoActionCreator(TodoId){
    return {
        type: ADD_TODO,
        payload:TodoId
    }
}
export function ToggleTodoActionCreator(TodoId){
    return {
        type: ADD_TODO,
        payload:TodoId
    }
}

export function addUserActionCreator(user){
    return {
        type:ADD_USER,
        payload:user
    }
}