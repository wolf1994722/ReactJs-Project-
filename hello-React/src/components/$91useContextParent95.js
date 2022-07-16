import React, { useState } from "react";

export let CountContext = React.createContext();
let ParentProvider = CountContext.Provider;

function UseContextParent95({children}) {
  console.log("we are in Parent 😜");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>xxx 😍 {count}</button>
      <ParentProvider value={count}>
        {children}
      </ParentProvider>
    </div>
  );
}

export default UseContextParent95;
