// import React from "react";
import { useState } from "react";
import RatingStars from "../components/RatingStars";
import ChaiList from "../components/ChaiList";

function Home({ 
  entries = [], onAdd, onDelete }) 
 {

  // drawing elements to be used and defining default settings
  const [style, setStyle] = useState("");
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    // the event handling for the form submission: https://react.dev/learn/responding-to-events
    e.preventDefault();

    const entry = {
      style,
      rating,
      notes: notes
    };

    // resetting after every submit handling
    onAdd(entry);
    setStyle("");
    setRating(0);
    setNotes("");
  }

  // formatting the home page
  return (
    <div className = "page">
      <h1>
        Chai Review
      </h1>

      <form onSubmit = {handleSubmit} className = "card" >
        <p>
          Which type of chai did you try?
          <select value = {style} onChange = {(e) => setStyle(e.target.value)}>
            <option>Chai:</option>
            <option>Masala</option>
            <option>Adrak</option>
            <option>Elaichi</option>
            <option>Kashmiri</option>
            <option>Cutting</option>
            <option>Filter</option>
            <option>Other(?)</option>
          </select>
        </p>

        <p>
          What's the tea? o_0  
          <textarea placeholder = "divulge ':| "
            value = {notes}
            onChange = {(e) => setNotes(e.target.value)}
          />
        </p>

        <div>

        <div>
          Rating
        </div>
          <RatingStars value = {rating} onChange={setRating} />
        </div>
        <button type = "submit">
          Save a cup :D
        </button>
        </form>
        <ChaiList entries = {entries} onDelete = {onDelete} />
    </div>
  );
}

export default Home;