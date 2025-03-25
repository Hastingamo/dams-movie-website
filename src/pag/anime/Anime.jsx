import React from "react";
import { Data } from "../../component/user/users";
import { useState} from "react";
import { data } from "react-router-dom";
import { Link } from "react-router-dom";

function Anime() {
  return (
    <>
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
        <div>
          {Data.map((movies) => (
            <div className="flex flex-row flex-wrap" key={movies.id}>
              <Link to={`/Detail/${movies.id}`} >
              <img className="w-[10rem] h-[10rem]" src={movies.images} alt="" />

              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Anime;
