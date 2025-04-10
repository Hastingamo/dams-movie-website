import React, { useState } from "react";
import { useEffect } from "react";

function them() {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
               <div>
          </div>
      <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">

        {movieList.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        ))}
      </div>
    </>
  );
}

export default them;
