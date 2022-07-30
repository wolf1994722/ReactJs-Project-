import "./App.css";
import data from "./data";
import SingleQuestion from "./Question";
import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>question and answer about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              {...question}
              // question={question}
            ></SingleQuestion>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;

// learing best practice

// 1. {readMore && <p>{info}</p>}
