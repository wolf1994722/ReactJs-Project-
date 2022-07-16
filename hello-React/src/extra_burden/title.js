import React from "react";

function Title() {
  console.log("rendering title");
  return (
    <React.Fragment>
      <h2>callBack hooks</h2>
    </React.Fragment>
  );
}

export default React.memo(Title);
