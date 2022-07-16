import React, { Component } from "react";

class MouseHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Counting = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <button onMouseOver={this.Counting}>Mouse move counter {count}</button>
      </div>
    );
  }
}
class MouseClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Counting = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <button onClick={this.Counting}>click count {count}</button>
      </div>
    );
  }
}

export { MouseClick, MouseHover };
