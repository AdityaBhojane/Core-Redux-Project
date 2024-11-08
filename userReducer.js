import { isAction } from "redux";
import { ADD_USER} from "./constants.js";

const user = [];

export default function userReducer(state=user,action){
    if(action.type == ADD_USER){
        return [...state, action.payload]
    }else{
        return state
    }
}