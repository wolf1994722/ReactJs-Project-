import React, { useState } from "react";
import ReactMemoChild2 from "./$85ReactMemoChild2";

// we dont use children wrap with memo ,if that particaular children have its own children
function ReactMemoParent2() {
  const [count, setCount] = useState(0);
  console.log("parent 2 render");
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>😭 {count}</button>
      <ReactMemoChild2 name="vishal">
        <strong>Hello</strong>
      </ReactMemoChild2>
    </div>
  );
}

export default ReactMemoParent2;
