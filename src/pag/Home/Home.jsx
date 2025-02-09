import PIcs from "../../component/continuePic/PIcs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] bg-[#808080] md:overflow-x-hidden xs:w-[26rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[32.8rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem]">
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
      </div>
      {/* <MiniBar
        cancel="images/cancel.png"
        modalId={"myModal"}
        // ModalId="kingdom of the planent of the apes"
        details="images/info.png"
        detail="espisode & info"
        likes="images/like.png"
        like="like"
        dislikes="images/dontlike.png"
        dislike="dislike"
        love="love"
      /> */}
    </>
  );
}

export default Home;
