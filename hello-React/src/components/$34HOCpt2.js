import React, { Component } from "react";
import UpdateComponent from "./$34HOCpt2.1";

class MouseClickpt2 extends Component {
  render() {
    let {count , Counting, name} = this.props
    return (
      <div>
        <button onClick={Counting}>{name} 😭 click count {count}</button>
      </div>
    );
  }
}


export default UpdateComponent(MouseClickpt2,655)
