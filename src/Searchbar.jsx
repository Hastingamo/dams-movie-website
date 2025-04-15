import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = "cefba94a8355c33d34ceea35237af99b";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const getData = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim() === "") {
        setMovies([]);
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchMovies();
    }, 500); // debounce to avoid excessive API calls

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const limitedMovies = movies.slice(0, 5);

  return (
    <div>
      <input
        placeholder="Search for movies..."
        onChange={getData}
        className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
      />
      {limitedMovies.length > 0
        ? limitedMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="flex flex-row ml-4 gap-8"
            >
              <div className="flex flex-row gap-6">
                <div>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : "https://via.placeholder.com/100x150?text=No+Image"
                    }
                    alt={movie.title}
                    className="w-16 h-24 mt-5"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="mt-5 text-2xl md:text-3xl">
                    {movie.title || "No title available"}
                  </p>
                  <p className="mt-3 md:text-2xl">
                    Release Date: {movie.release_date || "N/A"}
                  </p>
                </div>
              </div>
            </Link>
          ))
        : query && <p className="ml-4 mt-2">No results found</p>}
    </div>
  );
};

export default SearchBar;
