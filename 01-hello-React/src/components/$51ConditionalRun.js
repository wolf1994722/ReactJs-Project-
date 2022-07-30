import React, { useState, useEffect } from "react";

function ConditionalRun() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  useEffect(() => {
    document.ti̥tle = `you have clicked ${count}`;
    return () => {};
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName((name = e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>clicked me {count}</button>
      <p>name = {name} </p>
    </div>
  );
}

export default ConditionalRun;
