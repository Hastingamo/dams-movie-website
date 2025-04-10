import React from "react";
import { useState, useEffect } from "react";
import Searchs from "../../component/SearchBar/Searchs";

function Seriess() {
  const [seriesList, setSeriesList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b"
    )
      .then((res) => res.json())
      .then((json) => setSeriesList(json.results))
      .catch((err) => console.error("Error fetching movies:", err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div>
        <Searchs/>
      </div>
      <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
        {seriesList.map(
          (movie) =>
            movie.poster_path && (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || "Movie Poster"}
                className="rounded-lg shadow-md"
              />
            )
        )}
      </div>
    </>
  );
}

export default Seriess;
