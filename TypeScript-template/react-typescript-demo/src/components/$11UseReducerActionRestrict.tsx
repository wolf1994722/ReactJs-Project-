import {useReducer} from 'react'

type incrDecrState = {
    type: 'Increment' | 'Decrement'
    payload: number
}
type resetState = {
    type: 'Reset'
}
type actionState = incrDecrState | resetState
type stateState = {
    count: number
}

const intialState = {
    count : 0
}
const reducer = (state : stateState,action : actionState)=>{
    switch (action.type) {
        case 'Increment':
            return { count : state.count + action.payload}
        case 'Decrement':
            return { count : state.count - action.payload}
        case 'Reset':
            return intialState
        default:
            return state
    }
}

function UseReducerActionRestrict() {
    const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
        hi
        🤧🤡 {state.count}
        <button onClick={()=> dispatch({type: 'Increment',payload: 10})}>Increment</button>
        <button onClick={()=> dispatch({type: 'Decrement',payload: 10})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'Reset'})}>Reset</button>

    </div>
  )
}

export default UseReducerActionRestrict