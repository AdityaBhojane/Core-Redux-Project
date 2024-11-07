import { createStore } from "redux";
import todoReducer from "./todoReducer.js";

const todos = [];

const store = createStore(todoReducer,todos)
