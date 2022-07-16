import React, { useState } from "react";
import ObjectA from "./$90useContextChild85";

export let CountContext = React.createContext();
let ParentProvider = CountContext.Provider;

function UseContextParent85() {
  console.log("we are in Parent 😜");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((co) => co + 1)}>xxx 😘 {count}</button>
      <ParentProvider value={count}>
        <ObjectA></ObjectA>
      </ParentProvider>
    </div>
  );
}

export default UseContextParent85;
