import React from "react";
import { movie } from "../../pages/LandPage";
import "./Movie.css";

type dataMovie = {
  movie: movie;
};

const Movie = ({ movie }: dataMovie) => {
  const img_url = process.env.REACT_APP_IMG;
  const { title, poster_path, vote_average, overview } = movie;

  return (
    <div className="movie lightMovie">
      <img src={img_url + poster_path} alt={title} />
      <span className="lightSpan stats">{vote_average}</span>
      <div className="movie-info">
        <h3 className="title">{title}</h3>
      </div>
      <div className="overview">
        <h3>overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
