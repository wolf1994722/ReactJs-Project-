import React, { useState } from "react";

function ReReneringUseState() {
  const [count, setCount] = useState(0);
  console.log("redering happened");
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>count - {count}</button>
      <button onClick={()=> setCount(0)}>count - 0</button>
      <button onClick={()=> setCount(5)}>count - 5</button>
    </div>
  );
}

export default ReReneringUseState;
