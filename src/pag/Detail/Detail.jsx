import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../component/user/users";
import Footer from "../../component/Footer/Footer";
import Footers from "../../component/Footer/Footers";
import { Link } from "react-router-dom";
import { All } from "../../component/user/allMovies";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const movie = All.find((m) => m.id === Number(id));
  if (!movie) {
    return <div>item not found</div>;
  }
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [addToListMovies, setAddToListMovies] = useState(
    JSON.parse(localStorage.getItem("addToList") || "[]")
  );
  const recommendedMovies = All.filter((item) => item.id !== Number(id)) // Exclude the current movie
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 10);

  const addToFavorites = () => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  const addMovieToList = () => {
    if (!addToListMovies.some((dams) => dams.id === movie.id)) {
      const updatedList = [...addToListMovies, movie];
      setAddToListMovies(updatedList);
      localStorage.setItem("addToList", JSON.stringify(updatedList));
    }
  };
  return (
    <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
      <div className="flex flex-row gap-4  xs:gap-6 xm:gap-8 xp:gap-10">
        {/* <img className="w-[20rem] h-[20rem]" src={movies.images} alt="" /> */}
        <div>
          <img
            className="mt-10 w-[10rem] h-[15rem] xm:ml-4 xp:ml-8 lg:w-[16rem] lg:h-[13rem] xl:w-[20rem] xl:h-[25rem]"
            src={`/${movie.images}`}
            alt={movie.movie_name}
            onError={(e) => {
              e.target.src = "/images/placeholder.jpg";
            }}
          ></img>
          {/* <p className="ml-10 text-2xl mt-10">cast</p>
          <img className="w-5 h-5" src={`/${movie.AuthorImages}`} alt="" /> */}
          <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5"></div>
        </div>

        <div className="flex flex-col mt-2 gap-2 xs:text-2xl">
          <p>{movie.movie_name}</p>
          <p>Duration: {movie.duration}</p>
          <p>Genre: {movie.type}</p>
          <p>Release: {movie.release}</p>
          <p className="w-[13rem] xm:w-[18rem]  sm:w-[22rem] xp:w-[25rem] lg:w-[25rem]">
            overview: {movie.detail}
          </p>
          <div className="flex flex-row gap-8 mt-4">
            <div className="flex flex-col">
              <img
                onClick={addToFavorites}
                className="w-5 h-5 cursor-pointer items-center"
                src="/images/like.png"
                alt="Like"
              />{" "}
              <p>add to list</p>
            </div>
            <div className="flex flex-col">
              <img
                onClick={addMovieToList}
                className="w-5 h-5 cursor-pointer"
                src="/images/all.png"
                alt="Like"
              />{" "}
              <p>add to favorites</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-16 xm:ml-4 xp:ml-8">you may also like</h1>
      <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
        {" "}
        {recommendedMovies.map((rec) => (
          <Link key={rec.id} to={`/Detail/${rec.id}`} className="text-center">
            <img
              className="w-[15rem] h-[18rem] rounded-md"
              src={`/${rec.images}`}
              alt={rec.movie_name}
            />
            <p className="text-sm">{rec.movie_name}</p>
          </Link>
        ))}
      </div>
      <Footers className="mt-[40rem]" />
    </div>
  );
}

export default Detail;
