import React, { Component } from "react";
import styles from "./$20succes.module.css";

const ForwardRefsChild = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input type="text" placeholder="Forwarding refs" ref={ref} />
    </React.Fragment>
  );
});

export class ForwardRefsParent extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }
  changeEvent = () => {
    this.inputRefs.current.focus();
  };
  render() {
    return (
      <React.Fragment>
        <br />
        <ForwardRefsChild ref={this.inputRefs}></ForwardRefsChild>
        <button onClick={this.changeEvent} className={`${styles.btn}`}>
          Focus
        </button>
      </React.Fragment>
    );
  }
}

export default ForwardRefsParent;
