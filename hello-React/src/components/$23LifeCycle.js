import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vishal",
    };
    // console.log("lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // console.log("lifecycle B getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    // console.log("lifecylce B componentDidMount");
  }
  render() {
    // console.log("lifecycle B render");
    return <div></div>;
  }
}

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vishal",
    };
    // console.log("lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // console.log("lifecycle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    // console.log("lifecylce A componentDidMount");
  }
  render() {
    // console.log("lifecycle A render");
    return (
      <div>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

/*

lifecycle A constructor
lifecycle A getDerivedStateFromProps
lifecycle A render
lifecycle B constructor
lifecycle B getDerivedStateFromProps
lifecycle B render
lifecylce B componentDidMount
lifecylce A componentDidMount

*/


export default LifeCycleA;
