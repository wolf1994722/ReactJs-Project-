import React, { useContext } from "react";
import {CountContext} from "./$90useContextParent85";
// import CountContext from "./$89useContextParent75"; this was the error

function ObjectA() {
  console.log("we are in object A");
  return (
    <div>
      ObjectA
      <ObjectB></ObjectB>
    </div>
  );
}

function ObjectB() {
  console.log("we are in object B");
  return (
    <div>
      ObjectB
      <ObjectC></ObjectC>
    </div>
  );
}

function ObjectC() {
  console.log("we are in object C");
  let count = useContext(CountContext);
  return (
    <div>
      ObjectC
      {count}
    </div>
  );
}

export default React.memo(ObjectA);
