import React, { useState } from "react";

const intialObj = {
  fname: "vishal",
  lname: "kumar",
};

const intialArr = ['vishal']

function StateImutabilityArray() {
  const [arr, setArr] = useState(intialArr)
  const changeObj = () => {
    // let l = []
    // l.push('vivek')
    // setArr(l);

    let l = [...intialArr]
    l.push('vivek')
    setArr(l);
  };
  console.log("rendering in state Imbtability arr");
  return (
    <div>
      {
        arr.map(item => <div>{item}</div>)
      }
      <button onClick={changeObj}>Change arr value</button>
    </div>
  );
}

function StateImutabilityObject() {
  const [obj, setObj] = useState(intialObj);
  const changeObj = () => {
    // let person = { fname: "", lname: "" };
    // person.fname = "vivek";
    // person.lname = "kumar";
    // setObj(person);

    let person = {...intialObj}
    person.fname = 'vivek'
    person.lname = 'kumar'
    setObj(person)
  };
  console.log("rendering in state Imbtability obj");
  return (
    <div>
      {obj.fname} {obj.lname}
      <button onClick={changeObj}>Change Obj value</button>
    </div>
  );
}

export { StateImutabilityArray, StateImutabilityObject };
