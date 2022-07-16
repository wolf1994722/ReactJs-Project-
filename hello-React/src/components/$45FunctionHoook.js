import React, { useState } from "react";
function FunctionHoook() {
  let [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </React.Fragment>
  );
}

export default FunctionHoook;
