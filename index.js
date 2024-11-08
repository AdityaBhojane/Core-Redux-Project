import { addUserActionCreator, CreateTodoActionCreator } from './actionCreator.js'
import {store} from './store.js'
import { storeTwo } from './store2.js'


// store.dispatch(CreateTodoActionCreator("Learn JS"));
// store.dispatch(CreateTodoActionCreator("DSA"));
// store.dispatch(CreateTodoActionCreator("Python"));

storeTwo.dispatch(addUserActionCreator("Aditya"))
storeTwo.dispatch(addUserActionCreator("Sanket"))
storeTwo.dispatch(addUserActionCreator("Sachin"))

storeTwo.dispatch(CreateTodoActionCreator("do nothing"))

console.log(storeTwo.getState().todo)

