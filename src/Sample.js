import React, { useState } from "react"; // import useState hook
import ImageSlider from "./Vedios";
import "./App.css";

const Sample = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]); // declare state variable "images" to an empty array and "setImages" method to update images state

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://pixabay.com/api/?key=[api-key]&q=${query}`
    )  // fetch to API by passing in query state
      .then((response) => response.json())
      .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) // use object destructuring to grab image urls from json response
      .then(setImages); // call setImages to update images state with image urls
  };

  return (
    <div className="App">
      <h1>Image Slider</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    {/* Will import ImageSlider component here */}
    </div>
  );
};

export default Sample;