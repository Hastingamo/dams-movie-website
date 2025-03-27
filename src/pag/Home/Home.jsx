import PIcs from "../../component/continuePic/PIcs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import Footers from "../../component/Footer/Footers";
// import { useState, useEffect } from 'react';

function Home() {
  // function SliderComponent() {
  //   const [slidesToShow, setSlidesToShow] = useState(3);

  //   // Update the slidesToShow based on window width
  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth > 768) {
  //         setSlidesToShow(3);
  //       } else {
  //         setSlidesToShow(1);
  //       }
  //     };

  //     // Listen to window resize
  //     window.addEventListener('resize', handleResize);

  //     // Initial check on component mount
  //     handleResize();

  //     // Cleanup the event listener when the component unmounts
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  // }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow:
      window.innerWidth > 1400
        ? // If window width is greater than 1200px, show 4 slides
          5
        : window.innerWidth > 1100
        ? 4
        : window.innerWidth > 900
        ? 3
        : window.innerWidth > 750
        ? 2 // If window width is between 768px and 1200px, show 3 slides
        : window.innerWidth > 500
        ? 3
        : window.innerWidth > 400
        ? 3 // If window width is between 480px and 768px, show 2 slides
        : 2,
  };
  return (
    <>
      <div>
        {loading ? (
          <MoonLoader className="ml-[7rem] mt-64 xm:ml-[12rem] xm:mt-48 md:ml-[25rem] md:-mt-[40rem] lg:ml-[32rem] lg:-mt-[50rem] xl:ml-[40rem] xl:-mt-96"
          color={"black"}
            loading={loading}
            // cssOverride={override}
            size={150}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        ) : (
          <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
            <img
              src="images/Kingdom of the Planet of the Apes.png"
              className="w-full sm:w-[99%] sm:h-[100%] md:w-full md:h-full"
            />
            <h1 className="text-2xl text-white italic py-6 px-4">
              {" "}
              continue watching
            </h1>
            <div className="ml-5">
              <Slider {...settings}>
                <PIcs
                  img="images/Kingdom of the Planet of the Apes.png"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
                <PIcs
                  img="images/download.jpeg"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
                <PIcs
                  img="images/DUNE POSTER 4K 2021.jpeg"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
                <PIcs
                  img="images/Road House (2024).jpeg"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
                <PIcs
                  img="images/DUNE POSTER 4K 2021.jpeg"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
                <PIcs
                  img="images/Road House (2024).jpeg"
                  name="s1 : esp4"
                  imgss="images/dots.png"
                  imgs2="images/load-bar.png"
                  imgs3="images/info.png"
                />
              </Slider>
            </div>
            <Footers/>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
