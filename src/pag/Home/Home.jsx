// import React, { useEffect, useState } from "react";
// import { MoonLoader } from "react-spinners";
// import { Link } from "react-router-dom";
// import Footers from "../../component/Footer/Footers";

// const API_KEY = "cefba94a8355c33d34ceea35237af99b";
// const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

// function Home() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const [Popular, setPopular] = useState([]);

//   const  popularMovies = async() =>{
//         try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setPopular(data.results);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setLoading(false);
//     }

//    }


//   useEffect(() => {
//     setLoading(true);
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovies(data.results);
//         setLoading(false);

//         popularMovies();
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Select a random "featured" movie
//   const featuredMovie =
//     movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

//   // const recommendedMovies = movies
//   //   .filter((movie) => movie.id !== featuredMovie?.id)
//   //   .sort(() => 0.5 - Math.random())
//   //   .slice(0, 10);
   
//   return (
//     <div className="min-h-screen bg-[#DADADA] overflow-x-hidden">
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <MoonLoader color="black" size={100} />
//         </div>
//       ) : (
//         <>
//           {featuredMovie && (
//             <Link   to={`/movie/${movies.id}`}                 className="block">
//               <img
//                 className="w-full h-[20rem] rounded-md"
//                 src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
//                 alt={featuredMovie.title}
//               />
//               <p className="text-center text-2xl mt-2 font-semibold">
//                 {featuredMovie.title}
//               </p>
//             </Link>
//           )}
//             <div>
//             <h2 className="text-2xl font-semibold mb-4 px-5 mt-10">Popular Movies</h2>
//             <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {Popular.map((movie) => (
//                 <div key={movie.id} className="text-center">
//                   <Link to={`/movie/${movie.id}`}>
//                     <img
//                       className="w-full h-[18rem] object-cover rounded-md"
//                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                       alt={movie.title}
//                     />
//                     <p className="text-lg mt-2 font-medium">{movie.title}</p>
//                   </Link>
//                 </div>
//               )
//                 ) }
//             </div>
          
//           <Footers />
//         </>
//               </div>

//       )}  
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Footers from "../../component/Footer/Footers";

const API_KEY = "cefba94a8355c33d34ceea35237af99b";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [Popular, setPopular] = useState([]);

  const popularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPopular(data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        
        // Fetch popular movies after main movies are loaded
        await popularMovies();
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Select a random "featured" movie
  const featuredMovie =
    movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

  return (
    <div className="min-h-screen bg-[#DADADA] overflow-x-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <MoonLoader color="black" size={100} />
        </div>
      ) : (
        <>
          {featuredMovie && (
            <Link to={`/movie/${featuredMovie.id}`} className="block">
              <img
                className="w-full h-[20rem] rounded-md"
                src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
                alt={featuredMovie.title}
              />
              <p className="text-center text-2xl mt-2 font-semibold">
                {featuredMovie.title}
              </p>
            </Link>
          )}
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 px-5 mt-10">Popular Movies</h2>
            <div className="grid grid-cols-2 xm:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5">
              {Popular.map((movie) => (
                <div key={movie.id} className="text-center">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="w-full h-[18rem] object-cover rounded-md"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <p className="text-lg mt-2 font-medium">{movie.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <Footers />
        </>
      )}
    </div>
  );
}

export default Home;