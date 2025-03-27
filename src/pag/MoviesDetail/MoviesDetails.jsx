import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesDetails() {
  const [addToList, setAddToList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fetch from localStorage when component mounts
  useEffect(() => {
    setAddToList(JSON.parse(localStorage.getItem("addToList")) || []);

    // Listen for storage changes (if updated from another component)
    const handleStorageChange = () => {
      setAddToList(JSON.parse(localStorage.getItem("addToList")) || []);
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically determine the number of slides to show
  const getSlidesToShow = () => {
    if (windowWidth > 1400) return 5;
    if (windowWidth > 1100) return 4;
    if (windowWidth > 900) return 3;
    if (windowWidth > 750) return 2;
    if (windowWidth > 500) return 3;
    if (windowWidth > 400) return 3;
    return 2;
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: getSlidesToShow(),
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 750,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="h-screen overflow-x-hidden bg-[#808080]">
      <div className="ml-3">
        <h2 className="text-2xl font-bold ">Favorite Movies</h2>
        {addToList.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          <Slider {...settings}>
            {addToList.map((movie, index) => (
              <div key={index} className="p-4">
                <img className="w-[15rem] h-[15rem] rounded-md" src={movie.images} alt={movie.movie_name} />
                <p className="text-center mt-2">{movie.movie_name}</p>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default MoviesDetails;
