import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import SearchDetials from "../../component/SearchBar/SearchDetials";
import { All } from "../../component/user/allMovies";
import Footers from "../../component/Footer/Footers";

function Animess() {
  const [loading, setLoading] = useState(false); // Get the addToCart function from context

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
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
            <div className=" h-screen w-full overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">            <div>
              <div className="flex flex-row mt-4 ml-5 md:ml-10 gap-10 lg:gap-52 ">
                <SearchDetials />
              </div>
              <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
              {All.slice(17, 34).map((movies) => (
                  <div
                    className="flex flex-row mt-4 ml-5 md:ml-4 gap-10 lg:gap-52 "
                    key={movies.id}
                  >
                    <div className="flex flex-row">
                      <Link to={`/Detail/${movies.id}`}>
                        <img
                          className="w-[15rem] h-[15rem] "
                          src={movies.images}
                          alt=""
                        />
                        <p>{movies.movie_name}</p>
                        <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                          <img
                            className="w-6 h-6"
                            src="images/like.png"
                            alt="Like"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footers/>
          </div>
        )}
      </div>
    </>
  );
}

export default Animess;
