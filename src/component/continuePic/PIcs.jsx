import React from "react";

function PIcs(props) {
  return (
    <div className="h-[24.18rem] bg-[#1403037e] xm:h-[26rem] md:ml-3 md:h-[28.6rem] sm:bg-[#1403037e] rounded-lg lg:ml-10 lg:h-[35rem]">
      <img
        className="w-[25.3rem] h-[12.8rem] rounded-lg  xm:w-[10rem] md:w-[14.5rem] md:h-[16.98rem] lg:w-[15rem] lg:h-[22rem]"
        src={props.img}
        alt=""
      />
      <h1 className="text-2xl ml-4 mt-2 italic md:ml-10 md:text-3xl lg:ml-10 lg:text-4xl">
        {props.name}
      </h1>
      <img className="ml-2 w-[9rem] h-[3rem] xs:w-[6.6rem] md:ml-6 md:w-[11rem] lg:w-[9rem] xl:w-44" src={props.imgs2} alt="" />

      <div className="flex flex-row gap-10 xs:gap-8 md:gap-24 lg:gap-16 xl:gap-24">
        <img className="ml-4 w-[2rem] h-[2rem]" src={props.imgs3} alt="" />
        <img
          className=" w-[5rem] h-[4rem]" 
          src={props.imgss}
          alt="" 
        />
      </div>
    </div>
  );
}

export default PIcs;
