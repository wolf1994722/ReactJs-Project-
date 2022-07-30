import React, { useContext } from "react";
import {CountContext} from "./$89useContextParent75";
// import CountContext from "./$89useContextParent75"; this was the error

function ObjectA() {
  console.log("we are in object A");
  let count = useContext(CountContext);
  return (
    <div>
      ObjectA {count}
      <ObjectB></ObjectB>
    </div>
  );
}

function ObjectB() {
  console.log("we are in object B");
  let count = useContext(CountContext);
  return (
    <div>
      ObjectB {count}
      <ObjectC></ObjectC>
    </div>
  );
}

function ObjectC() {
  console.log("we are in object C");
  let count = useContext(CountContext);
  console.log(count);
  return (
    <div>
      ObjectC
      {count}
    </div>
  );
}

export default ObjectA;
