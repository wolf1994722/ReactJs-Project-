import React from "react";

function ReactMemoChild2({ children, name }) {
  console.log("child 2 render");
  return (
    <div>
      {children}, {name}
    </div>
  );
}

export default React.memo(ReactMemoChild2);
