import React from "react";
import { useEffect, useState } from "react";

function AddToList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);
  return (
    <>
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
        {" "}
        <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
          {" "}
          <h2>Favorite Movies</h2>
          <div className="flex flex-row  gap-10">
            {favorites.map((movie, index) => (
              <div key={index}>
                <p>{movie.movie_name}</p>
                <img className="w-[10rem] h-[10rem]" src={movie.images} alt="" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToList;
