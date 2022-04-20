import React from "react";
import { movie } from "../../App";
import Movie from "../Movie";
import "./Movies.css";

type movies = {
  data: movie[] | null;
};

const Movies = ({ data }: movies) => {
  console.log(data);
  return (
    <div>
      <main className="main">
        <div className="movies">
          {data?.map((movie) => (
            <div key={movie.id} className="card-movie">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Movies;
