import React, { Component } from "react";

// this don'nt work on arrow function for that we have to use try-catch

export class ErrorBoundariesParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("error :>> ", error);
    console.log("errorInfo :>> ", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <p style={{margin:'0',padding:'0'}}>Something went wrong 404</p>;
    } else return this.props.children;
  }
}

export default ErrorBoundariesParent;
