import React from 'react'

function Regis({facebbok, google, linkedin, twitter}) {
  return (
        <>
            <div className='flex flex-row justify-center items-center gap-2 mt-6'>
                <img className='w-4 h-4' src={facebbok} alt="" />
                <img className='w-4 h-4' src={linkedin} alt="" />
                <img className='w-4 h-4' src={google} alt="" />
                <img className='w-4 h-4' src={twitter} alt="" />


            </div>
        </>
  )
}

export default Regis