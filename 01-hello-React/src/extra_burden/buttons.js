import React from "react";
function Button({ handleClick, children }) {
  console.log("rendering button", children);
  return (
    <React.Fragment>
      <button onClick={handleClick}>{children}</button>
    </React.Fragment>
  );
}

export default React.memo(Button);
