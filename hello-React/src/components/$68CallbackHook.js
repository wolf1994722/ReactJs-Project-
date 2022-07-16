import React, { useState, useCallback } from "react";
import Title from "../extra_burden/title";
import Count from "../extra_burden/count";
import Button from "../extra_burden/buttons";

// memo is used to run the function if there is any change

function ParentCBHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incremnetSalary = useCallback(
    () => {
        setSalary(salary + 1000);
    },
    [salary],
  )
  
  return (
    <React.Fragment>
      <Title></Title>
      <Count text="Age" count={age}></Count> <br />
      <Button handleClick={incrementAge}>Increment Age</Button> <br />
      <Count text="Salary" count={salary}></Count> <br />
      <Button handleClick={incremnetSalary}>Increment Salary</Button> <br />
    </React.Fragment>
  );
}

export default ParentCBHook;
