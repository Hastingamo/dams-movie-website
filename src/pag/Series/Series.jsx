
function Series() {
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
          <div>
            <h1 className="border rounded-sm border-black p-1 px-8 xm:p-3 xm:px md:text-2xl lg:p-3 lg:px-14">
              sort by
            </h1>
            <img className="w-5 h-5 absolute top-7 left-[21rem] xm:left-[26rem] md:left-[30rem] md:w-8 md:h-8 lg:left-[43rem]"src="images/down.png" alt=""/>
          </div>
        </div>
      </div>
    </>

  )
}

export default Series