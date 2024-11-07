import { ADD_TODO } from "./constants";

export function CreateTodo(Todo){
    return {
        type: ADD_TODO,
        payload:Todo
    }
}
export function RemoveTodo(Todo){
    return {
        type: ADD_TODO,
        payload:Todo
    }
}
export function ToggleTodo(Todo){
    return {
        type: ADD_TODO,
        payload:Todo
    }
}