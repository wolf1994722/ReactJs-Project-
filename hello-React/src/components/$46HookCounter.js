import React, { useState } from "react";

function HookCounter2() {
  let intialCount = 0;
  let [count, setCount] = useState(0);

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1)
      setCount((preState) => preState + 1);
    }
  };

  return (
    <div>
      count : {count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment five</button>
    </div>
  );
}

export default HookCounter2;
