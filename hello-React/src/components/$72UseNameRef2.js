import React, { Component, useState, useEffect, useRef } from "react";

function UseNameRef2BB() {
  const [timer, setTimer] = useState(0);
  let IntervalTimer = useRef();
  useEffect(() => {
    IntervalTimer.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(IntervalTimer.current);
    };
  }, []);

  return (
    <div>
      hook timer = {timer}
      <button onClick={() => clearInterval(IntervalTimer.current)}> Clear Timer </button>
    </div>
  );
}

class UseNameRef2AA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        class counter - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>
          Clear Timer
        </button>
      </div>
    );
  }
}

export { UseNameRef2AA, UseNameRef2BB };
