import React, { Component } from "react";
import styles from "./$20succes.module.css";

class ChildRefs extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }
  clickHandler = () => {
    this.inputRefs.current.focus();
  };
  render() {
    return (
      <React.Fragment>
        <input
          className={`${styles.input}`}
          type="text"
          ref={this.inputRefs}
          placeholder="Accessing child refs from parent"
        />
      </React.Fragment>
    );
  }
}
class ParentRefs extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }
  onClickHandler = () => {
    this.parentRef.current.clickHandler();
  };
  render() {
    return (
      <React.Fragment>
        <ChildRefs ref={this.parentRef}></ChildRefs>
        <button className={`${styles.sucess} ${styles.btn}`} onClick={this.onClickHandler}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default ParentRefs;
