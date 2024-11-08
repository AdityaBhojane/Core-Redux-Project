import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer.js";
import todoReducer from "./todoReducer.js";

const NewReducer = combineReducers({
    todo:todoReducer,
    user:userReducer
})

export const storeTwo = createStore(NewReducer)

storeTwo.subscribe(()=> console.log(storeTwo.getState()))