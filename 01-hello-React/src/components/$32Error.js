import React from "react";

function ErrorChild({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("this is my name vishal");
  }
  return <div>{heroName}</div>;
}

export default ErrorChild;
