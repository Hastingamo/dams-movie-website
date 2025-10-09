import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footers from "../../component/Footer/Footers";
import MovieModal from "../../component/SearchModal/MovieModal";
// Mock loader component
const MoonLoader = ({ color = "#374151", loading = true, size = 40 }) => (
  !loading ? null : (
    <div
      className="animate-spin rounded-full border-4 border-gray-200 border-t-gray-800"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: color,
      }}
    ></div>
  )

);

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const getMovies = async (pageNumber = 1, append = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      if (append) {
        setMovieList((prev) => [...prev, ...data.results]);
      } else {
        setMovieList(data.results);
        window.scrollTo(0, 0);
      }
      
      setTotalPages(data.total_pages);
      setCurrentPage(pageNumber);
      
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(1, false);
  }, []);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage && !loading) {
      getMovies(pageNumber, false);
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
              setCurrentPage(1);
              getMovies(1, false);
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      )}
      <div className="flex  flex-row  ml-5 mt-3">
              <h1 className="text-3xl font-sans">Movies </h1>
              <MovieModal/>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6 px-5">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer transform transition-transform hover:scale-105"
          >
            {movie.poster_path ? (
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || "Movie Poster"}
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMjAwQzE2MS4wNDYgMjAwIDE3MCAyMDguOTU0IDE3MCAyMjBDMTcwIDIzMS4wNDYgMTYxLjA0NiAyNDAgMTUwIDI0MEMxMzguOTU0IDI0MCAxMzAgMjMxLjA0NiAxMzAgMjIwQzEzMCAyMDguOTU0IDEzOC45NTQgMjAwIDE1MCAyMDBaIiBmaWxsPSIjOUIxMDNEIi8+CjxwYXRoIGQ9Ik0yMTAgMjgwSDE0MEMxMzguODk1IDI4MCAxMzggMjgwLjg5NSAxMzggMjgyQzEzOCAyODMuMTA1IDEzOC44OTUgMjg0IDE0MCAyODRIMjEwQzIxMS4xMDUgMjg0IDIxMiAyODMuMTA1IDIxMiAyODJDMjEyIDI4MC44OTUgMjExLjEwNSAyODAgMjEwIDI4MFoiIGZpbGw9IiM5QjEwM0QiLz4KPC9zdmc+';
                    }}
                  />  
                </Link>
           <div className="mt-2 text-sm font-medium text-gray-800 truncate">
              {movie.title}
            </div>

              </div>
            ) : (
              // Placeholder for movies without posters
              <div className="w-full aspect-[3/4.5] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-center p-4">
                  <div className="text-2xl mb-2">🎬</div>
                  <div className="text-xs">No Image</div>
                </div>
              </div>
            )}
 

            <div className="text-xs text-gray-500 grid grid-cols-2">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                                          {movie.vote_average > 0 && (
                  <span className="text-xs text-yellow-600 flex items-center ">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                  
                )}
            </div>
          </div>
        ))}
      </div>

      {loading && (
        // <div className="flex justify-center items-center mt-8 py-8 w-full h-screen">
  <div className="fixed inset-0 flex justify-center items-center z-50 bg-white/70 backdrop-blur-sm">

          <MoonLoader color="#374151" loading={loading} size={40} />
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && totalPages > 0 && (
        <div className="flex flex-col items-center my-8 space-y-4 w-full h-fit">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ←
            </button>

            {getPageNumbers().map((pageNum) => (
              <button 
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`px-3 py-1 rounded-lg ${
                  pageNum === currentPage 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button 
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              →
            </button>
          </div>

          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
                  <Footers />

          </div>

        </div>
      )}

    </div>
  );
}

export default Movie;