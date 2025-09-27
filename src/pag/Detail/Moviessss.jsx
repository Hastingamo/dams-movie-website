// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; 
// import CastList from "../../component/castList/CastList";
// import VideoList from "../../component/VideoLists/VideoList";

// function Moviessss() {
//   const { category, id } = useParams(); // category = "movie" OR "tv"
//   const [item, setItem] = useState(null);
//   const API_KEY = "cefba94a8355c33d34ceea35237af99b";

//   useEffect(() => {
//     const getDetail = async () => {
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}&language=en-US`
//         );
//         const data = await res.json();
//         setItem(data);
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Failed to fetch detail:", error);
//       }
//     };

//     getDetail();
//   }, [category, id]);

//   if (!item) return null;

//   return (
//     <div className="text-white bg-gray-900 min-h-screen overflow-x-hidden flex flex-col">
//       {/* Banner */}
//       <div
//         className="w-full h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage: `url(https://image.tmdb.org/t/p/original${
//             item.backdrop_path || item.poster_path
//           })`,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
//         {/* Poster */}
//         <div className="md:w-1/3">
//           <img
//             src={
//               item.poster_path
//                 ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
//                 : "/fallback-poster.png"
//             }
//             alt={item.title || item.name}
//             className="rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Info */}
//         <div className="md:w-2/3">
//           <h1 className="text-4xl font-bold mb-4">
//             {item.title || item.name}
//           </h1>

//           {/* Release Date */}
//           <p className="text-gray-400 mb-2">
//             {item.release_date || item.first_air_date}
//           </p>

//           {/* Genres */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {item.genres?.slice(0, 5).map((genre) => (
//               <span
//                 key={genre.id}
//                 className="px-3 py-1 bg-indigo-600 text-sm rounded-full"
//               >
//                 {genre.name}
//               </span>
//             ))}
//           </div>

//           {/* Overview */}
//           <p className="text-gray-300 mb-6">{item.overview}</p>

//           {/* Casts */}
//           <div className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">Casts</h2>
//             <CastList id={item.id} category={category} /> {/* ✅ pass category */}
//           </div>

//           {/* Videos */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Videos</h2>
//             <VideoList id={item.id} category={category} /> {/* ✅ pass category */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Moviessss;


import { useEffect, useState } from "react";
import CastList from "../../component/castList/CastList";
import VideoList from "../../component/VideoLists/VideoList";
function Moviessss() {
  // Mock params for demo - replace with useParams() in your actual app
  const category = "movie"; // or "tv"
  const id = "550"; // Fight Club movie ID for demo
  
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "cefba94a8355c33d34ceea35237af99b";

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}&language=en-US`
        );
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Failed to fetch detail:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have valid category and id
    if (category && id && (category === 'movie' || category === 'tv')) {
      getDetail();
    } else {
      setError('Invalid category or ID');
      setLoading(false);
    }
  }, [category, id]);

  // Loading state
  if (loading) {
    return (
      <div className="text-white bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-white bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-400">Error: {error}</div>
      </div>
    );
  }

  // No data
  if (!item) {
    return (
      <div className="text-white bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-xl">No data found</div>
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper function to get display title
  const getDisplayTitle = () => {
    return item.title || item.name || 'Title not available';
  };

  // Helper function to get release date
  const getReleaseDate = () => {
    return item.release_date || item.first_air_date;
  };

  return (
    <div className="text-white bg-gray-900 min-h-screen overflow-x-hidden flex flex-col">
      {/* Banner */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            item.backdrop_path || item.poster_path
          })`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : "/fallback-poster.png"
            }
            alt={getDisplayTitle()}
            className="rounded-xl shadow-lg w-full max-w-md mx-auto md:mx-0"
            onError={(e) => {
              e.target.src = "/fallback-poster.png";
            }}
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">
            {getDisplayTitle()}
          </h1>

          {/* Type indicator */}
          <div className="mb-2">
            <span className="px-2 py-1 bg-blue-600 text-xs rounded-full uppercase">
              {category === 'tv' ? 'TV Series' : 'Movie'}
            </span>
          </div>

          {/* Release Date */}
          <p className="text-gray-400 mb-2">
            {category === 'tv' ? 'First Air Date: ' : 'Release Date: '}
            {formatDate(getReleaseDate())}
          </p>

          {/* Additional TV-specific info */}
          {category === 'tv' && item.number_of_seasons && (
            <p className="text-gray-400 mb-2">
              Seasons: {item.number_of_seasons} | Episodes: {item.number_of_episodes || 'N/A'}
            </p>
          )}

          {/* Runtime for movies, episode runtime for TV */}
          {item.runtime && category === 'movie' && (
            <p className="text-gray-400 mb-2">
              Runtime: {item.runtime} minutes
            </p>
          )}
          
          {item.episode_run_time && category === 'tv' && item.episode_run_time.length > 0 && (
            <p className="text-gray-400 mb-2">
              Episode Runtime: ~{item.episode_run_time[0]} minutes
            </p>
          )}

          {/* Rating */}
          {item.vote_average > 0 && (
            <p className="text-gray-400 mb-4">
              Rating: ⭐ {item.vote_average.toFixed(1)}/10 ({item.vote_count} votes)
            </p>
          )}

          {/* Genres */}
          {item.genres && item.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.genres.slice(0, 5).map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-indigo-600 text-sm rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          {item.overview && (
            <p className="text-gray-300 mb-6 leading-relaxed">{item.overview}</p>
          )}

          {/* Production info for TV shows */}
          {category === 'tv' && item.created_by && item.created_by.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Created by:</h3>
              <p className="text-gray-300">
                {item.created_by.map(creator => creator.name).join(', ')}
              </p>
            </div>
          )}

          {/* Status for TV shows */}
          {category === 'tv' && item.status && (
            <p className="text-gray-400 mb-4">
              Status: <span className="text-white">{item.status}</span>
            </p>
          )}

          {/* Casts */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Cast</h2>
            <CastList id={item.id} category={category} />
          </div>

          {/* Videos */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Videos</h2>
            <VideoList id={item.id} category={category} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviessss;
