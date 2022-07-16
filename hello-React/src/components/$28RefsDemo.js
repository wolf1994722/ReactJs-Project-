import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    this.inputRef.current.focus();
    if (this.cbRef) this.cbRef.focus();
  }
  clickBOI = () => {
    alert(this.inputRef.current.value || this.cbRef.value);
  };
  render() {
    return (
      <div>
        <input type="text" onClick={this.clickBOI} ref={this.inputRef} placeholder="Input Refs"/>
        <input type="text" onClick={this.clickBOI} ref={this.setCbRef} placeholder="Callback Refs"/>
      </div>
    );
  }
}
class RefsDemo extends Component {
  render() {
    return (
      <div>
        <Child></Child>
      </div>
    );
  }
}

export default RefsDemo;
