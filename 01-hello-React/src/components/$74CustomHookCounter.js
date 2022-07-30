import React from "react";
import useCounter from "../Hook/useCounter";

function CustomHookCounterA() {
  let [count, increment, decrement, reset] = useCounter(0,3);
  return (
    <div>
      counter of custom hook = {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
function CustomHookCounterB() {
  let [count, increment, decrement, reset] = useCounter(10,10);
  return (
    <div>
      counter of custom hook = {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export  {CustomHookCounterA , CustomHookCounterB};
