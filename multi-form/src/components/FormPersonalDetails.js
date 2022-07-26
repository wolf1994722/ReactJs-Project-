import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep(this.props.stateTransfer.step);
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep(this.props.stateTransfer.step);
  };

  render() {
    const { handleChange, stateTransfer } = this.props;

    return (
      <div>
        <h1>MultiForm Header 2</h1>
        <hr />
        <form onSubmit={this.continue}>
          <input
            type="text"
            name=""
            placeholder="Enter occupation"
            id=""
            onChange={handleChange("occupation")}
            value={stateTransfer.occupation}
          />
          <br />
          <input
            type="text"
            name=""
            placeholder="Enter city"
            id=""
            onChange={handleChange("city")}
            value={stateTransfer.city}
          />
          <br />
          <textarea
            name=""
            id=""
            placeholder="Enter bio"
            onChange={handleChange("bio")}
            value={stateTransfer.bio}
          ></textarea>
          <br />
          <br />
          <button type="submit" onClick={this.continue}>
            Continue😉
          </button>
          <button type="submit" onClick={this.back}>
            back😜
          </button>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
