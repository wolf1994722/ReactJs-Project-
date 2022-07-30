import React, { useContext } from "react";
import { WrapperContext } from "../App";

function ComponentReducerA() {
  const counter = useContext(WrapperContext);
  return (
    <div>
      count - {counter.count}
      <button onClick={() => counter.countDispathc("Increment")}>
        Increment
      </button>
      <button onClick={() => counter.countDispathc("Decrement")}>
        Decrement
      </button>
      <button onClick={() => counter.countDispathc("Reset")}>Reset</button>
    </div>
  );
}

function ComponentReducerD() {
  const counter = useContext(WrapperContext);
  return (
    <div>
      count - {counter.count}
      <button onClick={() => counter.countDispathc("Increment")}>
        Increment
      </button>
      <button onClick={() => counter.countDispathc("Decrement")}>
        Decrement
      </button>
      <button onClick={() => counter.countDispathc("Reset")}>Reset</button>
    </div>
  );
}
function ComponentReducerF() {
  const counter = useContext(WrapperContext);
  return (
    <div>
      count - {counter.count}
      <button onClick={() => counter.countDispathc("Increment")}>
        Increment
      </button>
      <button onClick={() => counter.countDispathc("Decrement")}>
        Decrement
      </button>
      <button onClick={() => counter.countDispathc("Reset")}>Reset</button>
    </div>
  );
}

function ComponentReducerB() {
  return (
    <div>
      <ComponentReducerD></ComponentReducerD>
    </div>
  );
}
// eslint-disable-next-line
function ComponentReducerC() {
  return (
    <div>
      <ComponentReducerE></ComponentReducerE>
    </div>
  );
}
function ComponentReducerE() {
  return (
    <div>
      <ComponentReducerF></ComponentReducerF>
    </div>
  );
}

export { ComponentReducerA, ComponentReducerB, ComponentReducerC};
