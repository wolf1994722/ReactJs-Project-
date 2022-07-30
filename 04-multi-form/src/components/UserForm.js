import React, { Component } from "react";
import Conform from "./Conform";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetail from "./FormUserDetail";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //   proceed to next step
  nextStep = (step) => {
    this.setState({
      step: step + 1,
    });
  };
  //   proceed to prev step
  prevStep = (step) => {
    this.setState({
      step: step - 1,
    });
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            stateTransfer={this.state}
          ></FormUserDetail>
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            stateTransfer={this.state}
          ></FormPersonalDetails>
        );
      case 3:
        return (
          <Conform
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            stateTransfer={this.state}
          ></Conform>
        );
      case 4:
        return <Success></Success>;
      default:
        break;
    }
  }
}

export default UserForm;
