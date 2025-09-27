// // import React from "react";
// import { useState, useEffect } from "react";
// import Search from "../../component/SearchModal/Search";
// import { MoonLoader } from "react-spinners";
// import { Link } from "react-router-dom";
// import Footers from "../../component/Footer/Footers";
// // import Image from "../../component/Image"; // Make sure this path is correct or adjust as needed

// function Seriess() {
//   const [seriesList, setSeriesList] = useState([]);
//   const [loading, setLoading] = useState(false); // Get the addToCart function from context

//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [error, setError] = useState(null);

//   const getSeries = async (pageNumber = 1, append = false) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(
//         `https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (append) {
//         setSeriesList((prev) => [...prev, ...data.results]);
//       } else {
//         setSeriesList(data.results);
//       }
//       if (pageNumber >= data.total_pages) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getSeries(1, false);
//   }, []);

//   useEffect(() => {
//     if (page > 1) {
//       getSeries(page, true);
//     }
//   }, [page, loading, hasMore]);

//   return (
//     <>
//       {loading ? (
//         <div className="w-full h-screen flex justify-center items-center">
//           <MoonLoader color={"black"} loading={loading} size={150} />
//         </div>
//       ) : (
//         <div>
//           <div>
//             <Search />
//           </div>
//           <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6 px-5">
//             {seriesList.map((series) => (
//               <div key={series.id} className="flex flex-col">
//                 {series.poster_path ? (
//                   <div>
//                       <Link to={`/${'series'}/${series.id}`}>
//                       <img
//                         src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
//                         alt={series.title || series.name}
//                       />
//                     </Link>
//                     {series.vote_average > 0 && (
//                       <span className="text-xs text-yellow-600 flex items-center">
//                         ⭐ {series.vote_average.toFixed(1)}
//                       </span>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="w-full aspect-[3/4.5] bg-gray-200 rounded-lg flex items-center justify-center">
//                     <div className="text-gray-400 text-center p-4">
//                       <div className="text-2xl mb-2">🎬</div>
//                       <div className="text-xs">No Image</div>
//                     </div>
//                   </div>
//                 )}
//                 <div className="mt-2 text-sm font-medium text-gray-800 truncate">
//                   {series.title || series.name}
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   {series.first_air_date
//                     ? new Date(series.first_air_date).getFullYear()
//                     : "N/A"}
//                 </div>
//               </div>
//             ))}
//           </div>
//             {!hasMore && !loading && seriesList.length > 0 && (
//               <div className="flex justify-center my-8">
//                 you have reached the end of the list.
//               </div>
//             )}

//           {!loading && hasMore && seriesList.length > 0 &&(
//             <div className="text-center my-8">
//               <button
//                 onClick={() => setPage((prev) => prev + 1)}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//           <Footers />
//         </div>
//       )}
//     </>
//   );
// }

// export default Seriess;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footers from "../../component/Footer/Footers";
const MoonLoader = ({ color, loading, size }) =>
  loading ? (
    <div
      className="animate-spin rounded-full border-4 border-gray-200 border-t-gray-800"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: color,
      }}
    />
  ) : null;
function Seriess() {
  const [seriesList, setSeriesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSeries = async (pageNumber = 1, append = false) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv ?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (append) {
        setSeriesList((prev) => [...prev, ...data.results]);
      } else {
        setSeriesList(data.results);
        window.scrollTo(0, 0);
      }

      setTotalPages(data.total_pages);
      setPage(pageNumber);
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

  const getPages = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, pages - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const onPages = (pageNumber) => {
    if (pageNumber !== page && !loading) {
      getSeries(pageNumber, false);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-5 mt-4">
          <p>Error loading movies: {error}</p>
          <button 
            onClick={() => {
              setError(null);
              setPage(1);
              getSeries(1, false);
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      )}

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6 px-5">
              {seriesList.map((series) =>(
                <div
                key={series.id}
            className="cursor-pointer transform transition-transform hover:scale-105">
              {
                series.poster_path ? (
                  <div>
                         <Link to={`/movie/${series.id}`}>
                  <img
                        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                    alt={series.title || "Movie Poster"}
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMjAwQzE2MS4wNDYgMjAwIDE3MCAyMDguOTU0IDE3MCAyMjBDMTcwIDIzMS4wNDYgMTYxLjA0NiAyNDAgMTUwIDI0MEMxMzguOTU0IDI0MCAxMzAgMjMxLjA0NiAxMzAgMjIwQzEzMCAyMDguOTU0IDEzOC45NTQgMjAwIDE1MCAyMDBaIiBmaWxsPSIjOUIxMDNEIi8+CjxwYXRoIGQ9Ik0yMTAgMjgwSDE0MEMxMzguODk1IDI4MCAxMzggMjgwLjg5NSAxMzggMjgyQzEzOCAyODMuMTA1IDEzOC44OTUgMjg0IDE0MCAyODRIMjEwQzIxMS4xMDUgMjg0IDIxMiAyODMuMTA1IDIxMiAyODJDMjEyIDI4MC44OTUgMjExLjEwNSAyODAgMjEwIDI4MFoiIGZpbGw9IiM5QjEwM0QiLz4KPC9zdmc+';
                    }}
                  />  
                </Link>
                                {series.vote_average > 0 && (
                  <span className="text-xs text-yellow-600 flex items-center mt-1">
                    ⭐ {series.vote_average.toFixed(1)}
                  </span>
                )}
                  </div>
                ):(
                                // Placeholder for movies without posters
              <div className="w-full aspect-[3/4.5] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-center p-4">
                  <div className="text-2xl mb-2">🎬</div>
                  <div className="text-xs">No Image</div>
                </div>
              </div>
                )}
                            <div className="mt-2 text-sm font-medium text-gray-800 truncate">
              {series.title}
            </div>
            <div className="text-xs text-gray-500">
              {series.release_date ? new Date(series.release_date).getFullYear() : 'N/A'}
            </div>
          </div>
        ))}


                  </div>

                        {loading && (
        <div className="flex justify-center items-center mt-8 py-8">
          <MoonLoader color="#374151" loading={loading} size={40} />
        </div>
      )}

 {!loading && totalPages > 0 && (
        <div className="flex flex-col items-center my-8 space-y-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onPages(page - 1)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-lg ${
                page === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ←
            </button>

            {getPages().map((pageNum) => (
              <button 
                key={pageNum}
                onClick={() => onPages(pageNum)}
                className={`px-3 py-1 rounded-lg ${
                  pageNum === page 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button 
              onClick={() => onPages(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-lg ${
                page === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              →
            </button>
          </div>

          <div className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </div>

        </div>
      )}
        <Footers/>
      </div>
  );
}

export default Seriess;
