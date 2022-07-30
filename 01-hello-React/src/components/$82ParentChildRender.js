import React, {useState}from "react";

function ChildRender() {
  console.log("child render");
  return <div></div>;
}

function ParentChildRender() {
    const [count, setCount] = useState(0)
  console.log("parent render");
  return (
    <div>
      count = {count}
      <button onClick={()=> setCount(c => c + 1)}>count - {count}</button>
      <button onClick={()=> setCount(0)}>count - 0</button>
      <button onClick={()=> setCount(5)}>count - 5</button>
      <ChildRender></ChildRender>
    </div>
  );
}

export default ParentChildRender;
