import React from "react";

function Child55({ name, fun1, obj }) {
  console.log("child55 ");
  return <div>👋 hello, {name}
  {obj.fname} {obj.lname} {fun1()}</div>;
}

export default React.memo(Child55);
