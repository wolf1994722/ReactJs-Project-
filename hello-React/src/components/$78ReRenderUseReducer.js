import React, { useReducer } from "react";

const intialValue = 0;
const reducer = (state, active) => {
  switch (active) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return intialValue;
    default:
      return state;
  }
};
function ReRenderUseReducer() {
  const [count, dispatch] = useReducer(reducer, intialValue);
  console.log("Re-Rendering in useReducer");
  return (
    <div>
      {count}
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}

export default ReRenderUseReducer;
