import React from "react";

function Count({ text, count }) {
  console.log("rendering count");
  return (
    <React.Fragment>
      {text} count {count}
    </React.Fragment>
  );
}

export default React.memo(Count);
