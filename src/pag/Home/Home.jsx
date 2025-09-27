import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Footers from "../../component/Footer/Footers";

const API_KEY = "cefba94a8355c33d34ceea35237af99b";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  // Select a random "featured" movie
  const featuredMovie =
    movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

  // Select 10 random recommended movies (excluding the featured one)
  const recommendedMovies = movies
    .filter((movie) => movie.id !== featuredMovie?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-[#DADADA] overflow-x-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <MoonLoader color="black" size={100} />
        </div>
      ) : (
        <>
          {featuredMovie && (
            <Link   to={`/movie/${movies.id}`}                 className="block">
              <img
                className="w-full h-[20rem] rounded-md"
                src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
                alt={featuredMovie.title}
              />
              <p className="text-center text-2xl mt-2 font-semibold">
                {featuredMovie.title}
              </p>
            </Link>
          )}

          <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 px-5">
            {recommendedMovies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}                className="text-center"
              >
                <img
                  className="w-full h-[18rem] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="text-lg mt-2 font-medium">{movie.title}</p>
              </Link>
            ))}
          </div>

          <Footers />
        </>
      )}
    </div>
  );
}

export default Home;
