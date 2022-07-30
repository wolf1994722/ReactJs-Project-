import React, { useEffect, useState } from "react";

// to replicate componentDidMount() { first } we use return in useEffect
// 1. when we use prevCount then we don't specify dependices and vice versa
// 2. when we define any function inside useEffect then we have to include all the varibale in depedices list which the function is using

function IncorrectDependices() {
  let [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

    let mmm = "vijay"
  useEffect(() => {
    const prev = () => {
        console.log(mmm);
    }
    prev()
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [mmm]);

  return <div>🤪 count with every second - {count}</div>;
}

export default IncorrectDependices;
