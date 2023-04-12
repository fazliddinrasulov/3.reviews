import { useState } from "react";
import "./App.css";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      console.log(people.length);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };
  return (
    <main>
      <article className="container review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn " onClick={randomPerson}>
          random user{" "}
        </button>
      </article>
    </main>
  );
}

export default App;
