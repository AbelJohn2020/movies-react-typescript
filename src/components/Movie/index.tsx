import React from "react";
import { movie } from "../../App";

type dataMovie = {
  movie: movie;
};

const Movie = ({ movie }: dataMovie) => {
  const img_url = process.env.REACT_APP_IMG;
  const { title, poster_path, vote_average, overview } = movie;

  const getColor = (vote: number) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div>
      <img src={img_url + poster_path} alt={title} />
      <div>
        <h1>{title}</h1>
        <span className={getColor(vote_average)}>{vote_average}</span>
        <div className="overviews">
          <h3>overview</h3>
          <span>{overview}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
