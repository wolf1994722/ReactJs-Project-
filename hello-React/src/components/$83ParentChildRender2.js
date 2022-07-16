import React, { useState } from "react";


function ChildRender2() {
    console.log('child render');
  return (
    <div>ChildRender2 is render first but not 2 time ""children""</div>
  )
}

function ParentChildRender2({children}) {
  const [count, setCount] = useState(0);
  console.log('parent rendering');
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>click me {count}</button>
      {children}
    </div>
  );
}

export {ParentChildRender2, ChildRender2};
