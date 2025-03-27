import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddToList() {
  const [addToListMovies, setAddToListMovies] = useState([]);

  useEffect(() => {
    setAddToListMovies(JSON.parse(localStorage.getItem("addToList")) || []);
  }, []);

  const removeFromList = (id) => {
    const updatedList = addToListMovies.filter((movie) => movie.id !== id);
    setAddToListMovies(updatedList);
    localStorage.setItem("addToList", JSON.stringify(updatedList));
  };

  return (
    <div className="h-screen overflow-x-hidden bg-[#808080] md:bg-[#DADADA]">
      <div className="ml-3">
        <h2 className="text-2xl font-bold">My Movie List</h2>
        {addToListMovies.length === 0 ? (
          <p className="mt-4">No movies added to the list yet.</p>
        ) : (
          <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
            {addToListMovies.map((movie) => (
              <div key={movie.id} className="relative text-center">
                <Link to={`/Detail/${movie.id}`}>
                  <img
                    className="w-[15rem] h-[15rem] rounded-md"
                    src={`/${movie.images}`}
                    alt={movie.movie_name}
                    onError={(e) => {
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                  <p className="text-lg">{movie.movie_name}</p>
                </Link>
                <button
                  onClick={() => removeFromList(movie.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToList;
