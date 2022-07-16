import React, { useState } from "react";
import useDocumentTitle from "../Hook/useDocumentTitle";

function DocumentTitleCustomA() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </div>
  );
}
function DocumentTitleCustomB() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </div>
  );
}

export {
  DocumentTitleCustomA,
  DocumentTitleCustomB,
};
