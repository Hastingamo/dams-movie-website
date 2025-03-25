import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../component/user/users";
import Footer from "../../component/Footer/Footer";
import Footers from "../../component/Footer/Footers";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const movies = Data.find((movies) => movies.id === Number(id));
  if (!movies) {
    return <div>item not found</div>;
  }
  const recommendedMovies = Data
    .filter((item) => item.id !== Number(id)) // Exclude the current movie
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 4); // Pick the first 3 random movies

  return (
    <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
      <div className="flex flex-row gap-4 flex-wrap">
        {/* <img className="w-[20rem] h-[20rem]" src={movies.images} alt="" /> */}
        <img
          className="mt-5 w-[10rem] h-[15rem] xl:w-[20rem] xl:h-[20rem]"
          src={`/${movies.images}`}
          alt={movies.movie_name}
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        ></img>
        <div className="flex flex-col gap-2">
          <p>{movies.movie_name}</p>
          <p>{movies.duration}</p>
          <p>{movies.type}</p>
          <p>{movies.release}</p>
          <p>{movies.detail}</p>
        </div>
      </div>
      <h1 className="mt-16">you may also like</h1>
      <div className="flex gap-4 mt-2">
        {recommendedMovies.map((rec) => (
          <Link key={rec.id} to={`/Detail/${rec.id}`} className="text-center">
            <img className="w-[8rem] h-[8rem] rounded-md" src={`/${rec.images}`} alt={rec.movie_name} />
            <p className="text-sm">{rec.movie_name}</p>
          </Link>
        ))}
      </div>
      <Footers className="mt-[40rem]"/>
    </div>
  );
}

export default Detail;
