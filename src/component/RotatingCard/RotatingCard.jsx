import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import { addToList } from "../context/AddToListContext";
import { Data } from "../user/users";
import { Link } from "react-router-dom";
function RotatingCard({ Captainmarvel, love, info, share }) {
  const [isfliped, setIsFliped] = useState(false);
  function flipeds() {
    setIsFliped(!isfliped);
  }
  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isfliped}>
        {/* <div className="mt-8" onClick={flipeds}>
          <img
            src={Captainmarvel}
            alt=""
            className="w-[25.3rem] h-[12.8rem] rounded-lg  xm:w-[10rem] md:w-[14.5rem] md:h-[16.98rem] lg:w-[15rem] lg:h-[22rem]"
          />
        </div> */}

        <div
          className="bg-[#1403037e] md:ml-3 sm:bg-[#1403037e] rounded-lgw-[25.3rem] h-[12.8rem] rounded-lg  xm:w-[10rem] md:w-[14.5rem] md:h-[16.98rem] lg:w-[15rem] lg:h-[22rem] mt-8 flex justify-center items-center"
          onClick={flipeds}
        >
          <img className="w-5 h-5 " src={love} alt="" />
          <img className="w-5 h-5" src={info} alt="" />
          <img className="w-5 h-5 " src={share} alt="" />
        </div>
      </ReactCardFlip>
    </>
  );
}

export default RotatingCard;
