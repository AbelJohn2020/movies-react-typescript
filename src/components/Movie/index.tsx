import React from "react";
import { movie } from "../../App";
import "./Movie.css";

type dataMovie = {
  movie: movie;
};

const Movie = ({ movie }: dataMovie) => {
  const img_url = process.env.REACT_APP_IMG;
  const { title, poster_path, vote_average, overview } = movie;

  const getColor = (vote: number) => {
    if (vote >= 8) {
      return "darkWhite";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img src={img_url + poster_path} alt={title} />
      <div className="movie-info">
        <h3 className="card-title">{title}</h3>
        <span className={getColor(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
