import React from "react";
import { Data } from "../../component/user/users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../component/SearchBar/Search";
import { MoonLoader } from "react-spinners";
import { All } from "../../component/user/allMovies";

function Anime() {
  const [loading, setLoading] = useState(false); // Get the addToCart function from context

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <MoonLoader
            className="ml-[7rem] mt-64 xm:ml-[12rem] xm:mt-48 md:ml-[25rem] md:-mt-[40rem] lg:ml-[32rem] lg:-mt-[50rem] xl:ml-[40rem] xl:-mt-96"
            color={"black"}
            loading={loading}
            // cssOverride={override}
            size={150}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        ) : (
          <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
            <div>
              <div className="flex flex-row mt-4 ml-5 md:ml-10 gap-10 lg:gap-52 ">
                <Search />
              </div>
              <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xp:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-5">
                {All.slice(0, 17).map((movies) => (
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
          </div>
        )}
      </div>
    </>
  );
}

export default Anime;
