import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
<h1>Directors Page</h1>
<div>
        {directors.map((director , index) => (
          <div key={index}>
            <p>Name: {director.name}</p>
            {director.movies.map((movies, index) => (
             <li key={index}>{movies}</li>
            ))}
          </div>
        ))}
      </div>
  </div>
  );
}

export default Directors;