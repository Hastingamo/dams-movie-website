// import React from "react";
import { useState, useEffect } from "react";
import Search from "../../component/SearchModal/Search";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Footers from "../../component/Footer/Footers";
// import Image from "../../component/Image"; // Make sure this path is correct or adjust as needed

function Seriess() {
  const [seriesList, setSeriesList] = useState([]);
  const [loading, setLoading] = useState(false); // Get the addToCart function from context

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const getSeries = async (pageNumber = 1, append = false) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (append) {
        setSeriesList((prev) => [...prev, ...data.results]);
      } else {
        setSeriesList(data.results);
      }
      if (pageNumber >= data.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSeries(1, false);
  }, []);

  useEffect(() => {
    if (page > 1) {
      getSeries(page, true);
    }
  }, [page, loading, hasMore]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <MoonLoader color={"black"} loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <div>
            <Search />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6 px-5">
            {seriesList.map((series) => (
              <div key={series.id} className="flex flex-col">
                {series.poster_path ? (
                  <div>
                      <Link to={`/${'series'}/${series.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                        alt={series.title || series.name}
                      />
                    </Link>
                    {series.vote_average > 0 && (
                      <span className="text-xs text-yellow-600 flex items-center">
                        ⭐ {series.vote_average.toFixed(1)}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="w-full aspect-[3/4.5] bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-center p-4">
                      <div className="text-2xl mb-2">🎬</div>
                      <div className="text-xs">No Image</div>
                    </div>
                  </div>
                )}
                <div className="mt-2 text-sm font-medium text-gray-800 truncate">
                  {series.title || series.name}
                </div>
                <div className="text-xs text-gray-500">
                  {series.first_air_date
                    ? new Date(series.first_air_date).getFullYear()
                    : "N/A"}
                </div>
              </div>
            ))}
          </div>
            {!hasMore && !loading && seriesList.length > 0 && (
              <div className="flex justify-center my-8">
                you have reached the end of the list.
              </div>
            )}

          {!loading && hasMore && seriesList.length > 0 &&(
            <div className="text-center my-8">
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
          <Footers />
        </div>
      )}
    </>
  );
}

export default Seriess;
