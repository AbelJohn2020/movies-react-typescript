import React from "react";
import { movie } from "../../pages/LandPage";
import "./NotFound.css";

type NotFound = {
  inputValue: string;
  movies: () => movie[] | string | undefined;
  validation: string;
};

export const NotFoundMovie = ({ inputValue, movies, validation }: NotFound) => {
  return (
    <div className="card">
      <div className="search">
        {!validation && <h1>Do not use special characters</h1>}
        <h1>You have been search: </h1>
        <h2>{inputValue}</h2>
      </div>
      <div className="message">
        <div>{movies.length} found movies</div>
        <p>We're sorry, but your search returned no results.</p>
        <p>Please try again.</p>
      </div>
    </div>
  );
};
