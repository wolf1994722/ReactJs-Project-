import React, { Component } from "react";
import axios from "axios";

export class PostListGetReq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      err: "",
    };
  }
  componentDidMount() {
    let url = `https://jsonplaceholder.typicode.com/posts`
    axios.get(url)
    .then(data => {
        this.setState({
            data : data.data
        })
    })
    .catch(err =>{
        this.setState({
            err: err.code
        })
    })
  }
  render() {
    return <React.Fragment>
    
    { this.state.data.length ? this.state.data.map(item => <div key={item.id}>⭐{item.id} - {item.title.toUpperCase().slice(0,25)}.. - 👉🏻{item.body.slice(0,50)}</div>) : null }
    { this.state.err.length ? this.state.err : null }
    
    </React.Fragment>;
  }
}

export default PostListGetReq;
