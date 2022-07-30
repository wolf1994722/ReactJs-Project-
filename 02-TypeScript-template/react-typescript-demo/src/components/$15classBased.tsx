import React, { Component } from "react";

type counterProps = {
  message: string;
};
type counterState = {
  count: number;
};

// export class classBased extends Component<{},counterState> if no props
export class ClassBased extends Component<counterProps, counterState> {
  constructor(props: counterProps) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment = () => {
    this.setState((co) => {
        return {count : co.count + 55}
    });
  };
  render() {
    return (
      <>
        {this.props.message} 🦺 - {this.state.count}
        <button onClick={this.increment}>Incrment 55</button>
      </>
    );
  }
}

export default ClassBased;
