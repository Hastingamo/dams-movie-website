import React from "react";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { All } from "../../component/user/allMovies";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddToList from "../AddToList/AddToList";
import MoviesDetails from "../MoviesDetail/MoviesDetails";
import Footers from "../../component/Footer/Footers";
function Home() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false); // Get the addToCart function from context

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const recommendedMovies = All.filter((item) => item.id !== Number(id)) // Exclude the current movie
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 10);
    const recommendedMovie = All.filter((item) => item.id !== Number(id)) // Exclude the current movie
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 1);

  return (
    <>
      <div>
        <div>
          {loading ? (
            <MoonLoader
              className="ml-[7rem] mt-64 xm:ml-[12rem] flex justify-center items-center"
              color={"black"}
              loading={loading}
              // cssOverride={override}
              size={150}
              // aria-label="Loading Spinner"
              // data-testid="loader"
            />
          ) : (
            <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
              <div >
                {" "}
                {recommendedMovie.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/Detail/${rec.id}`}
                    className="text-center"
                  >
                    <img
                     className="w-full xm:h-fit"
                      src={`/${rec.images}`}
                      alt={rec.movie_name}
                    />
                    <p className="text-sm">{rec.movie_name}</p>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
                {" "}
                {recommendedMovies.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/Detail/${rec.id}`}
                    className="text-center"
                  >
                    <img
                      className="w-[15rem] h-[18rem] rounded-md"
                      src={`/${rec.images}`}
                      alt={rec.movie_name}
                    />
                    <p className="text-2xl">{rec.movie_name}</p>
                  </Link>
                ))}
              </div>
              <Footers/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
