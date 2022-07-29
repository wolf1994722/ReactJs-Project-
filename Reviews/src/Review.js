import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const incrementImage = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const decrementImage = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomImage = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * people.length);
      if (newIndex === index) randomImage();
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <div className="author">{name}</div>
      <div className="job">{job}</div>
      <div className="info">{text}</div>
      <div className="button-container">
        <button className="prev-btn" onClick={decrementImage}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={incrementImage}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={randomImage}>
        suprise me
      </button>
    </article>
  );
}

export default Review;
