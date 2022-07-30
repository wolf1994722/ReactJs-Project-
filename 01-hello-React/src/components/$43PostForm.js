import React, { Component } from "react";
import axios from "axios";
// we use formic for react to create

const deco = {
  color: "green",
  "border-radius": "15px",
  border: "1px solid #eee",
  padding: "10px 15px",
  display: "inline-block",
  "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
};

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      body: "",
      created: false,
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  responseHandler = (e) => {
    e.preventDefault();
    let url = `https://jsonplaceholder.typicode.com/posts`;
    axios
      .post(url, this.state)
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            created: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    // console.log('asdfthisImport Cost this ');
    let { id, title, body } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.responseHandler}>
          <div>
            <label htmlFor="id">Id: </label>
            <input
              type="number"
              name="id"
              id=""
              onChange={this.changeHandler}
              value={id}
            />
          </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id=""
              onChange={this.changeHandler}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <input
              type="text"
              name="body"
              id=""
              onChange={this.changeHandler}
              value={body}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {this.state.created ? (
          <span style={deco}> Object have been created successfully</span>
        ) : null}
        <hr />
      </React.Fragment>
    );
  }
}

export default PostForm;
