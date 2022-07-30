import React, { useState } from "react";
const green = {
  border: "1px solid green",
};
function HookCounter3() {
  let [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <React.Fragment>
      <form>
        <label htmlFor="">firstName or lastName</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <br />
        <label htmlFor="">firstName and lastName</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>
          your first name is <span style={green}>{name.firstName}</span>
        </p>
        <p>
          your last name is <span style={green}>{name.lastName}</span>
        </p>
        <p>
          your name obj is{" "}
          <span style={green}>
            {" "}
            firstName : {name.firstName},lastName: {name.lastName}
          </span>
        </p>
      </form>
    </React.Fragment>
  );
}

export default HookCounter3;
