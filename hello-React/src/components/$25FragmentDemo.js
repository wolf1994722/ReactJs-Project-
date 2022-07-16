import React, { Component } from "react";

const heading = {
  margin: 0,
};

const border = {
  border: "1px solid red",
};

function Row() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Vishal</td>
    </React.Fragment>
  );
}

function Table() {
  return (
    <table style={border}>
      <tbody>
        <tr>
          <Row />
        </tr>
      </tbody>
    </table>
  );
}

export class FragmentDemo extends Component {
  render() {
    let names = ["vishal", "vivek", "raju", "kaliya"];
    names = names.map((item, id) => (
      <React.Fragment key={id}>{item}</React.Fragment>
    ));
    return (
      <React.Fragment>
        <h4 style={heading}>this is simple heading 😂</h4>
        <p style={heading}>this is another simple content</p>
        <Table></Table>
        {names}
      </React.Fragment>
    );
  }
}

// in React.Fragment we can pass parameter such as key={item.id}
// but on using <></> we can't

// You can use the poor man's fragment shorthand as a quick fix: [ , ]
// render(){
//   return [
//     <div key="f">foo</div>,
//     <div key="b">bar</div>
//   ]
// }

export default FragmentDemo;
