import React from "react";
import useInput from "../Hook/useInput";

function UseFormCustomHook() {
  let [firstName, resetFirstName, bindFirstName] = useInput("");
  let [lastName, resetLastName, bindLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hi ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="FristName">FirstName :</label>
          <input type="text" {...bindFirstName} name="FristName" id="" />
        </div>
        <div>
          <label htmlFor="LastName">LastName :</label>
          <input type="text" {...bindLastName} name="LastName" id="" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default UseFormCustomHook;
