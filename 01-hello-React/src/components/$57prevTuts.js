import axios from "axios";
import React, { useEffect, useState } from "react";

function IdFetchHook11() {
  let [post, setPost] = useState([]);
  let [id, setId] = useState(1);
  let [err, setErr] = useState("");
  let [isFormButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    if (id > 100) setId(id % 100);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${isFormButtonClick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [id,isFormButtonClick]);

  const valueBoi = ()=>{
    setIdFromButtonClick(id)
  }

  const valueChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <input type="number" name="" id="" value={id} onChange={valueChange} />
      <button type="submit" onClick={valueBoi}>Submit</button>

      <div>
        {post.id}. 😲 {post.title}
        {err ? err : null}
      </div>
    </div>
  );
}

export default IdFetchHook11;
