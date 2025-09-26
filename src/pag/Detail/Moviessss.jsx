import  { useEffect, useState } from "react";
import { useParams } from "react-router";
import CastList from "../../component/castList/CastList";
import VideoList from "../../component/VideoLists/VideoList";
// import VideoList from "../../component/VideoLists/videolist";
function Moviessss() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const API_KEY = "cefba94a8355c33d34ceea35237af99b";

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setItem(data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Failed to fetch movie detail", error);
      }
    };

    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <div className="text-white bg-gray-900 min-h-screen overflow-x-hidden flex flex-col">
          {/* Banner */}
          {/* <div
            className="w-full h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path})`,
            }}
          ></div> */}
          <div className="w-full h-[500px] bg-cover bg-center">
            {/* <h2 className="text-2xl font-semibold mb-4">Videos</h2> */}
            {/* <VideoList id={item.id} /> */}
            <VideoList id={item.id}/>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="md:w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">
                {item.title || item.name}
              </h1>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.genres?.slice(0, 5).map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-indigo-600 text-sm rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="text-gray-300 mb-6">{item.overview}</p>

              {/* Casts */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Casts</h2>
                <CastList id={item.id} />
              </div>

              {/* Videos */}
              {/* <div>
                <h2 className="text-2xl font-semibold mb-4">Videos</h2>
                <VideoList id={item.id} />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Moviessss;
