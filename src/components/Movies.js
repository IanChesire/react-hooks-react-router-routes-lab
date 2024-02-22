import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            {movie.genres.map((genre, index) => (
             <li key={index}>{genre}</li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;