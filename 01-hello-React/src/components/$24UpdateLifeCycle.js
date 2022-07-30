import React, { Component } from "react";

class UpdateLifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishal",
    };
    this.changeState = this.changeState.bind(this);
    // console.log("UpdateLifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("UpdateLifeCycleB getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    // console.log("UpdateLifeCycleB getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("UpdateLifeCycleB componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "vishal kumar",
    });
  };

  render() {
    // console.log("UpdateLifeCycleB render");
    return <span onClick={this.changeState}>&nbsp;&nbsp;&nbsp;UpdateLifeCycleB</span>;
  }
}

class UpdateLifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishal",
    };
    this.changeState = this.changeState.bind(this);
    // console.log("UpdateLifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("UpdateLifeCycleA getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    // console.log("UpdateLifeCycleA getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("UpdateLifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "vishal kumar",
    });
  };

  render() {
    // console.log("UpdateLifeCycleA render");
    return (
      <div>
        <span onClick={this.changeState}>UpdateLifeCycleA</span>
        <UpdateLifeCycleB></UpdateLifeCycleB>
      </div>
    );
  }
}

export default UpdateLifeCycleA;
