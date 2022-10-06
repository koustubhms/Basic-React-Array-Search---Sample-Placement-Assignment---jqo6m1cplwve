import React from 'react'

import '../styles/App.css';



import React, { useState } from "react";
const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  const [input, setInput] = useState("");
  
  return (
    <div id="main">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="search.."
        value={input}
        id='search-input'
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <h3>Results</h3>
      <ul>
        {
          searchArray
            .filter((val) => {
              if (input === "") {
                return;
              } else if (val.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return <li>{val}</li>;
            })}
      </ul>
    </div>
  );
};

export default App;

