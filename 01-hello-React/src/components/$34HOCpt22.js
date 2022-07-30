import React, { Component } from "react";
import UpdateComponent from "./$34HOCpt2.1";

class MouseHoverpt2 extends Component {
  render() {
    let {count , Counting, name} = this.props
    return (
      <div>
        <button onMouseOver={Counting}>{name} 😭 Mouse move counter {count}</button>
      </div>
    );
  }
}

export default UpdateComponent(MouseHoverpt2,54684)
