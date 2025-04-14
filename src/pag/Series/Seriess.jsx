import React from "react";
import { useState, useEffect } from "react";
import Search from "../../component/SearchModal/Search";
import { MoonLoader } from "react-spinners";

function Seriess() {
  const [seriesList, setSeriesList] = useState([]);
  const [loading, setLoading] = useState(false); // Get the addToCart function from context

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-80 z-50 overflow-x-hidden">
          <MoonLoader color={"black"} loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <div>
            <Search />
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
        </div>
      )}
    </>
  );
}

export default Seriess;
