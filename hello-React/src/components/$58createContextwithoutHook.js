import React from "react";

const NameContext = React.createContext();
const ChannelContext = React.createContext();

function CreateContextwithoutHook() {
  return (
    <React.Fragment>
      <NameContext.Consumer>
        {(name) => {
          return <h2>my name is {name}</h2>;
        }}
      </NameContext.Consumer>
    </React.Fragment>
  );
}
function CreateContextwithoutHook1() {
  return (
    <React.Fragment>
      <NameContext.Consumer>
        {(name) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return <h2>my name is {name} and channel is {channel}</h2>;
              }}
            </ChannelContext.Consumer>
          );
        }}
      </NameContext.Consumer>
    </React.Fragment>
  );
}

function DealingWithoutContext() {
  return (
    <React.Fragment>
      <NameContext.Provider value="vishal">
        <CreateContextwithoutHook></CreateContextwithoutHook>
      </NameContext.Provider>
      <NameContext.Provider value="vishal">
        <ChannelContext.Provider value="saste coder">
          <CreateContextwithoutHook1 ></CreateContextwithoutHook1>
        </ChannelContext.Provider>
      </NameContext.Provider>
    </React.Fragment>
  );
}

export default DealingWithoutContext;
