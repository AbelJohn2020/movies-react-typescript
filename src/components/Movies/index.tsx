import React from "react";
import { movie } from "../../App";

type movies = {
  data: movie[] | null;
};

const Movies = ({ data }: movies) => {
  console.log(data);
  return (
    <div>
      {data?.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </div>
  );
};

export default Movies;
