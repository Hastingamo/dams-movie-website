import React from 'react'

function Footers() {
  return (
    <div className='text-red-950 mt-5 flex flex-col  w-[40rem] h-[10rem] xs:h-[12rem] md:ml-8 md:w-[25rem] md:mt-32 xp:w-[31rem] lg:w-[45rem] xl:w-[66rem] bg-[#d3baba88]'>
        <h1 className='ml-32 text-2xl mt-5 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-8 lg:ml-60 xl:ml-[22rem]'>Want To Know more</h1>
        <h1 className='ml-32 text-2xl mt-3 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-4 lg:ml-60 xl:ml-[22rem]'>Contact us</h1>
        <div className='flex ml-32 gap-4 text-2xl mt-3 md:ml-24 xp:ml-32 xp:text-3xl lg:mt-4 lg:ml-60 xl:ml-[22rem]'>
          <img  className='w-5 h-5' src="images/facebook.png" alt="" />
          <img className='w-5 h-5' src="images/facebook.png" alt="" />
          <img className='w-5 h-5 ' src="images/facebook.png" alt="" />




        </div>
    </div>
  )
}

export default Footers