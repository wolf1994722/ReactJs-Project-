import React, { Component } from "react";

class MyNameIs extends Component {
  render() {
    return <div>{this.props.name(false)}</div>;
  }
}

class BaseRenderC1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  incrementNo = ()=>{
    this.setState(prevState =>{
      return {count : prevState.count + 1}
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementNo)}
      </div>
    )
  }
}
class BaseRenderC2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  incrementNo = ()=>{
    this.setState(prevState =>{
      return {count : prevState.count + 1}
    })
  }
  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.incrementNo)}
      </div>
    )
  }
}

export { MyNameIs, BaseRenderC1, BaseRenderC2 };
