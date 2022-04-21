import React, { useState } from "react";
import { movie } from "../../App";
import Movie from "../Movie";
import Icons from "../UI/Icons";
import "./Movies.css";

type movies = {
  data: movie[] | null;
};

const Movies = ({ data }: movies) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  const movies = () => {
    if (inputValue.length === 0) {
      return data?.slice(counter, counter + 6);
    } else {
      const filterMovies = data?.filter((movie) =>
        movie?.title.includes(inputValue)
      );
      return filterMovies?.slice(counter, counter + 6);
    }
  };

  const handlePrevious = () => {
    setCounter(counter - 6);
  };

  const handleNext = () => {
    if (data && counter < data?.length - 2) {
      setCounter(counter + 6);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      <main className="main">
        <div className="movies">
          {movies()?.map((movie) => (
            <div key={movie.id} className="card-movie">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
        <div className="pagination">
          {counter > 5 ? (
            <button className="prevAndNext" onClick={handlePrevious}>
              <Icons type="prev" color="#505050" size="20px" />
            </button>
          ) : (
            <button className="prevAndNext" disabled>
              <Icons type="prev" color="#A0A0A0" size="20px" />
            </button>
          )}
          <button className="prevAndNext" onClick={handleNext}>
            <Icons type="next" color="#505050" size="20px" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Movies;
