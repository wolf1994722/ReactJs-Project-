import React, { useReducer } from "react";

const intialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment1":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement1":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
    //   return { ...intialState};
      return intialState;
    default:
      return state;
  }
};

function ReducerUseses() {
  let [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      first Counter is {count.firstCounter}
      first Counter is {count.secondCounter}
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "Increment1", value: 10 })}>
        Increment second
      </button>
      <button onClick={() => dispatch({ type: "Decrement1", value: 10 })}>
        Decrement second
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default ReducerUseses;
