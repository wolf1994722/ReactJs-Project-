import React from "react";

function MemoCompnent(details) {
//   console.log("child");
  return <div>{details.name}</div>;
}

export default React.memo(MemoCompnent);
// export default MemoCompnent
