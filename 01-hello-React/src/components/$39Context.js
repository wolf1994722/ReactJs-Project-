import React, { Component } from "react";

const UserContext = React.createContext("papu");

let UserProvider = UserContext.Provider;
let UserConsumer = UserContext.Consumer;

class BlockComponentC extends Component {
  render() {
    return <BlockComponentD></BlockComponentD>;
  }
}
class BlockComponentD extends Component {
  render() {
    return <BlockComponentE></BlockComponentE>;
  }
}
class BlockComponentE extends Component {
  render() {
    return (
      <React.Fragment>
        this is conext {this.context}
        <BlockComponentF></BlockComponentF>
      </React.Fragment>
    );
  }
}

BlockComponentE.contextType = UserContext;

class BlockComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello, {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export { UserProvider, BlockComponentC };
