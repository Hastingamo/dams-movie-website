import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddToList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);
  // const removeFromFavorites = (id) => {
  //   const updatedFavorites = favorites.filter((movie) => movie.id !== id);
  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  // };
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <>
      <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
        {" "}
        <div className="ml-3">
          {" "}
          <h2>Favorite Movies</h2>
          <div className="flex flex-row flex-wrap gap-6">
            {favorites.map((movie) => (
              <Link
                key={movie.id}
                to={`/Detail/${movie.id}`}
                className="text-center"
              >
                <img
                  className="w-[15rem] h-[15rem]"
                  src={movie.images}
                  alt=""
                />
                <p>{movie.movie_name}</p>
                <button
                  onClick={() => removeFromFavorites(movie.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToList;
