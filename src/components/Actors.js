import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div> 
    <h1>Actors Page</h1>
    <div>
        {actors.map((actor , index) => (
          <div key={index}>
            <p>Name: {actor.name}</p>
            {actor.movies.map((movies, index) => (
             <li key={index}>{movies}</li>
            ))}
          </div>
        ))}
      </div>
  </div>

  )
}

export default Actors;