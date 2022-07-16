import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

function MultipleUseReducer() {
  let [count, dispatch] = useReducer(reducer, intialState);
  let [count2, dispatch2] = useReducer(reducer, intialState);
  return (
    <div>
      first count is {count}
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      second count is {count2}
      <button onClick={() => dispatch2("Increment")}>Increment</button>
      <button onClick={() => dispatch2("Decrement")}>Decrement</button>
      <button onClick={() => dispatch2("Reset")}>Reset</button>
    </div>
  );
}

export default MultipleUseReducer;
