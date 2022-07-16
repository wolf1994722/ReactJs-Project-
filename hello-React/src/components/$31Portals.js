import React, { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.querySelector("#portal-root");
const input = {
  color: "#58a9de",
  outline: "none",
  padding: "5px 15px",
  margin: "0",
};

export class PortalsParent extends Component {
  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <p style={input}>portal root - this is used for pop , modal box , cookie box to stop overflow</p>
      </React.Fragment>,
      portalRoot
    );
  }
}

export default PortalsParent;
