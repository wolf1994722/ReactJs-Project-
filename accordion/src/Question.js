import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info }) {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {!readMore ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </header>
      <p>{readMore ? `${info.substring(0, 50)}..` : info}</p>
    </article>
  );
}

export default Question;
