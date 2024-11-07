import { CreateTodoActionCreator } from './actionCreator.js'
import {store} from './store.js'

store.dispatch(CreateTodoActionCreator("Learn JS"));
store.dispatch(CreateTodoActionCreator("DSA"));
store.dispatch(CreateTodoActionCreator("Python"));

