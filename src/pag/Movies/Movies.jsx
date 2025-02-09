import Modal from "../../component/Modal/Modal";
import RotatingCard from "../../component/RotatingCard/RotatingCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Movies() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow:
      window.innerWidth > 1100
        ? 4 // If window width is greater than 1200px, show 4 slides
        : window.innerWidth > 900
        ? 3
        : window.innerWidth > 750
        ? 2 // If window width is between 768px and 1200px, show 3 slides
        : window.innerWidth > 500
        ? 3
        : window.innerWidth > 400
        ? 2 // If window width is between 480px and 768px, show 2 slides
        : 2,
  };
  return (
    <>
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] bg-[#808080] md:overflow-x-hidden xs:w-[26rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem]">
        <div className="flex flex-row mt-4 ml-5 md:ml-10 gap-10 lg:gap-52">
          <div>
            <input
              placeholder="search"
              className="border-black border-solid border rounded p-1 text-black xm:text-2xl md:text-2xl md:p-2"
            ></input>
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
        <div className="">
          <Slider {...settings}>
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
            <RotatingCard
              Captainmarvel="images/Captain.png"
              info="images/info.png"
              love="images/info.png"
              share="images/info.png"
            />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Movies;
