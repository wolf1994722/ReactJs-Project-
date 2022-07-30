import React, { Component } from "react";

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep(this.props.stateTransfer.step);
  };

  render() {
    const { handleChange, stateTransfer } = this.props;

    return (
      <div>
        <h1>MultiForm Header</h1>
        <hr />
        <input
          type="text"
          name=""
          placeholder="Enter first name"
          id=""
          onChange={handleChange("firstName")}
          value={stateTransfer.firstName}
        />
        <br />
        <input
          type="text"
          name=""
          placeholder="Enter last name"
          id=""
          onChange={handleChange("lastName")}
          value={stateTransfer.lastName}
        />
        <br />
        <input
          type="email"
          name=""
          placeholder="Enter email"
          id=""
          onChange={handleChange("email")}
          value={stateTransfer.email}
        />
        <br />
        <br />
        <button type="submit" onClick={this.continue}>
          Continue😉
        </button>
      </div>
    );
  }
}

export default FormUserDetail;
