import React, { Component } from "react";
import MemoCompnent from "./$27MemoCompnent1";

export class MemoComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishal",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "vishal",
      });
    }, 100);
  }
  render() {
    // console.log("Parent");
    return (
      <div>
        <MemoCompnent name={this.state.name}></MemoCompnent>
        <hr />
      </div>
    );
  }
}

export default MemoComp;
