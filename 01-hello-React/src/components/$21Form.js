import React, { Component } from "react";
import "./$19StyleSheet.css";

export class FormMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      comment: "",
      topic: "react",
    };
  }
  customUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  customEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  customComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  customTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  submitBTN = (event) => {
    alert(
      `👋 ${this.state.userName} 📪 ${this.state.email} 🔊 ${this.state.comment} 🚙 ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    let { userName, email, comment, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.submitBTN}>
          <div>
            <label htmlFor="username">Username : </label>
            <input
              value={userName}
              onChange={this.customUserName}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              onChange={this.customEmail}
              type="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="comment">Comment: </label>
            <textarea
              value={comment}
              onChange={this.customComment}
              name="comment"
              placeholder="Enter comment .."
            ></textarea>
          </div>
          <div>
            <label htmlFor="car">Car : </label>
            <select value={topic} onChange={this.customTopic} name="car">
              <option value="ferrari">ferrari</option>
              <option value="g wagon">g wagon</option>
              <option value="gtr">gtr</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default FormMethod;
