import React from 'react'
import Modal from "../../component/Modal/Modal";
import RotatingCard from "../../component/RotatingCard/RotatingCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

function Cartoon() {
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
          ? 5 // If window width is greater than 1200px, show 4 slides
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
            <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
              <div className="flex flex-row mt-4 ml-5 md:ml-10 gap-10 lg:gap-52">
                <div>
                  <img
                    className="w-5 h-5 absolute top-7 left-[11rem] xm:left-[16rem] md:left-[18rem] md:w-8 md:h-8"
                    src="images/loupe.png"
                    alt=""
                  />
                </div>
                <Modal
                  title="Release date"
                  rating="Rating"
                  all="All"
                  cancel="images/cancel.png"
                  calendar="images/calendar.png"
                  ratings="images/star.png"
                  alls="images/all.png"
                />
              </div>
              <h1 className="mt-4 ml-4 text-2xl text-white">Popular</h1>
              <div className="ml-12">
                <Slider {...settings}>
                  <RotatingCard
                    Captainmarvel="images/Avatar.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Big.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/moana.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/arcane.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Kung.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Invicible.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                </Slider>
              </div>
              <h1 className="mt-4 ml-4 text-2xl text-white">For You</h1>
  
              <div className="ml-12">
                <Slider {...settings}>
                  <RotatingCard
                    Captainmarvel="images/LoveRobot.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Paw.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Pussy.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/arcane.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Garfeild.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Secret.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                </Slider>
              </div>
              <h1 className="mt-4 ml-4 text-2xl text-white">Action</h1>
              <div className="ml-12">
                <Slider {...settings}>
                  <RotatingCard
                    Captainmarvel="images/Young.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Pj.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Secret.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Invicible.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/LoveRobot.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Badguys.png"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                </Slider>
              </div>
              <h1 className="mt-4 ml-4 text-2xl text-white">Adventure</h1>
              <div className="ml-12">
                <Slider {...settings}>
                  <RotatingCard
                    Captainmarvel="images/Ben.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Shrek.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Badguys.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/moana.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/SgoobDo.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                  <RotatingCard
                    Captainmarvel="images/Minions.jpeg"
                    info="images/info.png"
                    love="images/info.png"
                    share="images/info.png"
                  />
                </Slider>
              </div>
            </div>
          )}
        </div>
      </>
    );
  
}

export default Cartoon