import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingdataUsingEffectState() {
  const [Loading, setLoading] = useState(true);
  const [Err, setErr] = useState("");
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setLoading(false);
        setErr("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(true);
        setErr("something went wrong");
        setPost({});
      });
    return () => {};
  }, [id]);

  return (
    <div>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <br />
      data : {Loading ? "Loading" : post.title}
      <br />
      Err : {Err ? Err : null}
    </div>
  );
}

export default FetchingdataUsingEffectState;
