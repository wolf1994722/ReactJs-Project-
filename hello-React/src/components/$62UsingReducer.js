import React, { useReducer } from "react";

const intialstate = 0
const reducer = (state, action)=>{
    switch (action) {
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        case 'Reset':
            return intialstate
        default:
            return state
    }
}

function UsingReducer() {
    let [count, dispatch] = useReducer(reducer, intialstate)
    return (
    <div>
      counting is {count}
      <button onClick={()=> dispatch('Increment')}>Increment</button>
      <button onClick={()=> dispatch('Decrement')}>Decrement</button>
      <button onClick={()=> dispatch('Reset')}>Reset</button>
    </div>
  );
}

export default UsingReducer;
