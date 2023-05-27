//* we export all reducer from index.js file

import { combineReducers } from 'redux'
import amountReducer from './amountReducer'

const reducers = combineReducers({
    amount : amountReducer,
})

export default reducers