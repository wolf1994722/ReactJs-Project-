import { useState } from "react";

function useCounter(intialize = 0, value = 1) {
  const [count, setcount] = useState(intialize);

  const increment = () => {
    setcount((count) => count + value);
  };
  const decrement = () => {
    setcount((count) => count - value);
  };
  const reset = () => {
    setcount(intialize);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
