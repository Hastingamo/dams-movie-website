import React from "react";
import Regis from "./Regis";

function Rgister() {
  return (
    <>
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[26.5rem] bg-[#808080] xp:w-[42rem] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[48.95rem] xl:w-[70.6rem] xlg:w-[90rem] ">
        <div className="flex justify-center items-center  mt-80  ">
          <div className="w-[20rem] mt-8  md:mt-16 xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] flex  flex-col">
                <div className="bg-[#050b11] h-[18rem] w-[20rem] xp:w-[34rem] flex justify-center items-center lg:[37rem] lg:h-[30rem] xlg:w-[55rem] xp:h-[19rem]">
                     <img className="w-[4rem] h-[4rem] mt-2" src="images/letters.png" alt="" />
                </div>
                <div className="bg-white absolute top-[16rem] h xs:top-[15rem] xm:top-[14rem] rounded-[4rem] xm:left-18 h-[24rem] w-[20rem] xp:w-[34rem] xp:top-[18rem] xp:h-[26rem] lg:[37rem]  lg:top-[26rem] lg:h-[40rem] xlg:w-[55rem] xlg:h-[32rem] xlg:top-72 ">
                  <h1 className="text-black text-3xl flex justify-center items-center mt-4 font-sans xp:text-5xl xp:mt-9"> welcome! </h1>
                  <div className=" mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]"> 
                      <h1 className="text-2xl text-center pt-2 xp:text-3xl xp:pt-4">create account</h1>
                  </div>
                  <div className=" mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]"> 
                      <h1 className="text-2xl text-center pt-2 xp:text-3xl xp:pt-4">login</h1>
                  </div>
                  <Regis
                  google="images/social.png"
                  facebbok="images/facebook.png"
                  linkedin="images/linkedin.png"
                  twitter="images/twitter.png">

                  </Regis>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rgister;
