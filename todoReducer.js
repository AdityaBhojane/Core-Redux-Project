import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constants";


export default function todoReducer(state=initialObject, action){
    if(action.type == ADD_TODO){
        return {
            ...state,
            todos:[
                ...state.todos,
                {id:Date.now(), text:action.payload, checked:false}
            ]
        }
    }else if(action.type == REMOVE_TODO){
        return{
            ...state.todos,
            todos: state.todos.filter(todo => todo !== action.payload)
        }
    }else if(action.type == TOGGLE_TODO){
        return{
            ...state.todos,
            todos: state.todos.map((todo)=>{
                if(todos.id == action.payload){
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }else{
                    return todo
                }
            })
        }
    }
}