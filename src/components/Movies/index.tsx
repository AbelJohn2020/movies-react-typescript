import React, { useState } from "react";
import { movie } from "../../pages/LandPage";
import { Input } from "../Input/Input";
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
      return data?.slice(counter, counter + 8);
    } else {
      const filterMovies = data?.filter((movie) =>
        movie?.title.includes(inputValue)
      );
      return filterMovies?.slice(counter, counter + 8);
    }
  };

  const handlePrevious = () => {
    setCounter(counter - 8);
  };

  const handleNext = () => {
    if (data && counter < data?.length - 4) {
      setCounter(counter + 8);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      <header>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
      </header>
      <main className="main darkMain">
        <div className="movies">
          {movies()?.map((movie) => (
            <div key={movie.id} className="card-movie">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className={counter > 5 ? "prevAndNext" : "disabledButton"}
            onClick={handlePrevious}
            disabled={counter > 5 ? false : true}
          >
            <Icons type="prev" color="#F0F0F0" size="20px" />
          </button>
          <button className="prevAndNext" onClick={handleNext}>
            <Icons type="next" color="F0F0F0" size="20px" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Movies;
