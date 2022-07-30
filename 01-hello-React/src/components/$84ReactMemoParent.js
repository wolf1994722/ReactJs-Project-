import React, { useState } from "react";
import ReactMemoChild from "./$84ReactMemoChild";
function ReactMemoParent() {
  const [count, setCount] = useState(0);
  console.log("parent render");
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>😲 {count}</button>
      <ReactMemoChild name="vishal"></ReactMemoChild>
    </div>
  );
}

export default ReactMemoParent;
