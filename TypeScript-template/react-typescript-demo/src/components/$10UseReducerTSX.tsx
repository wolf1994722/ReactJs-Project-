import { useReducer } from "react";

type counterState = {
  count: number;
};
type activeState = {
  type: string;
  payload: number;
};

const intialState = {
  count: 0,
};
function reducer(state: counterState, active: activeState) {
  switch (active.type) {
    case "Increment":
      return { count: state.count + active.payload };
    case "Decrement":
      return { count: state.count - active.payload };
    case "Reset":
      return { count: intialState.count };
    default:
      return state;
  }
}

function UseReducerTSX() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      😍🥰😅🤣😂🙄 {state.count}
      <button onClick={() => dispatch({ type: "Increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "Reset", payload: 10 })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerTSX;
