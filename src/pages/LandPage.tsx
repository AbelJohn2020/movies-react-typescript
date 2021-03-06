import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import { getMovies, typeError } from "../components/utils";

export type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

const LandPage = () => {
  const [data, setData] = useState<movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies()
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch(() => typeError);
  }, []);

  return (
    <div className="App">{loading ? <Loading /> : <Movies data={data} />}</div>
  );
};

export default LandPage;
