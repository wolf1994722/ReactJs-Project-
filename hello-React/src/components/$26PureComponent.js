import React, { PureComponent, Component } from "react";

const heading = {
  margin: 0,
};


// class ParentPureComp extends PureComponent {
class ParentPureComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vishal",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(
        {
          name: "vishal",
        }
      );
    }, 2000);
  }
  render() {
    // console.log("parentPureComp -- Component");
    return <div>
        <h4 style={heading}>Parent</h4>
        <ChildA name={this.state.name}></ChildA>
        <ChildB name={this.state.name}></ChildB>
    </div>;
  }
}

class ChildA extends PureComponent {
  render() {
    // console.log("childA -- PureComponent");
    return <span>{this.props.name}</span>;
  }
}

class ChildB extends Component {
  render() {
    // console.log("childB -- Component");
    return <span> --- {this.props.name}</span>;
  }
}

export default ParentPureComp;
