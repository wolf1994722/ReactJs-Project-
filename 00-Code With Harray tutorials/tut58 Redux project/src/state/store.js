import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

//* thunk is used to execute async function 
//* (reducers, intialState, middleWare)
const store = createStore(reducers, {}, applyMiddleware(thunk)) 

export default store 