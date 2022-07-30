import React, { Component } from "react";

export class Conform extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep(this.props.stateTransfer.step);
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep(this.props.stateTransfer.step);
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <div>
        <h1>MultiForm Header 2</h1>
        <hr />
        <form onSubmit={this.continue}>
          {firstName ? <li>👉 First Name :: {firstName}</li> : ""}
          {lastName ? <li>👉 Last Name :: {lastName}</li> : ""}
          {email ? <li>👉 Email :: {email}</li> : ""}
          {occupation ? <li>👉 Occupation :: {occupation}</li> : ""}
          {city ? <li>👉 City :: {city}</li> : ""}
          {bio ? <li>👉 Bio :: {bio}</li> : ""}
          <br />
          <br />
          <button type="submit" onClick={this.continue}>
            Conform 😊
          </button>
          <button type="submit" onClick={this.back}>
            back😜
          </button>
        </form>
      </div>
    );
  }
}

export default Conform;
