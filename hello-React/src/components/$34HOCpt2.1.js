import React from "react";

const UpdateComponent = (OriginalComponent,number) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    Counting = () => {
      this.setState((prevState) => {
        return { count: prevState.count + number };
      });
    };
    render() {
      return <OriginalComponent count={this.state.count} Counting={this.Counting} {...this.props}></OriginalComponent>;
    }
  }
  return NewComponent;
};

export default UpdateComponent;
