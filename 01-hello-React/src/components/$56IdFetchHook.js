import axios from "axios";
import React, { useEffect, useState } from "react";

function IdFetchHook() {
  let [post, setPost] = useState([]);
  let [id, setId] = useState(1);
  let [err, setErr] = useState("")
  useEffect(() => {
    if(id> 100) 
        setId(id%100)
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        setErr(err)
      });
  },[id]);

  const valueChange = (e) => {
    setId(e.target.value);
  };
  return (
    <div>
      <input type="number" name="" id="" value={id} onChange={valueChange} />
      {post.id}. 😲 {post.title}
      { err ? err : null}
    </div>
  );
}

export default IdFetchHook;
