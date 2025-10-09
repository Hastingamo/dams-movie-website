import React from "react";
import { useNavigate } from "react-router-dom";

function Footers() {
  const navigate = useNavigate();
  return (
    <div className="text-red-950 mt-24 flex flex-col  w-[40rem] h-[4rem] xs:h-[4rem]  md:ml-8 md:h-[12rem]  md:w-[25rem] xp:w-[31rem] lg:w-[45rem] xl:w-[66rem] bg-[#d3baba88]">
      <div className="gap-5 ml-24 mt-6 flex flex-row md:hidden">
        <button onClick={() => navigate("/Home")}>Home</button>
        <button onClick={() => navigate("/Movies")}>Movies</button>
        <button onClick={() => navigate("/Series")}>Series</button>
       
        <button onClick={() => navigate("/Profile")}>Profile</button>
        <button onClick={() => navigate("/AddToList")}>AddToList</button>

      </div>
      <div className="hidden md:flex md:flex-col">
        <h1 className="ml-32 text-2xl mt-5 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-8 lg:ml-60 xl:ml-[22rem]">
          Want To Know more
        </h1>
        <h1 className="ml-32 text-2xl mt-3 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-4 lg:ml-60 xl:ml-[22rem]">
          Contact us
        </h1>
        <div className="flex ml-32 gap-4 fixed text-2xl mt-3 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-4 lg:ml-60 xl:ml-[22rem] justify-center items-center">
          <img className="w-5 h-5" src="images/facebook.png" alt="" />
          <img className="w-5 h-5" src="images/instagram.png" alt="" />
          <img className="w-5 h-5 " src="images/tiktok.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footers;
