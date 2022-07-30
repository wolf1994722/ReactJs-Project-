import React, { useState } from "react";
import ObjectA from "./$89useContextChild75";

export let CountContext = React.createContext();
let ParentProvider = CountContext.Provider;

function UseContextParent75() {
  console.log("we are in Parent 😜");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>xxx 😢 {count}</button>
      <ParentProvider value={count}>
        <ObjectA></ObjectA>
      </ParentProvider>
    </div>
  );
}

export default UseContextParent75;
