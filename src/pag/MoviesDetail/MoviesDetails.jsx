import React from 'react'
import { useEffect,useState } from 'react';
import Footers from '../../component/Footer/Footers';
function MoviesDetails() {
    const [addToList, setAddToList] = useState([]);
  
    useEffect(() => {
      setAddToList(JSON.parse(localStorage.getItem("addToList")) || []);
    }, []);
  return (
    <div className=" h-screen overflow-x-hidden xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:overflow-x-hidden xm:overflow-x-hidden md:bg-[#DADADA]">
    {" "}
    <div className="ml-3">
      {" "}
      <h2>Favorite Movies</h2>
      <div className="flex flex-row flex-wrap gap-6">
        {addToList.map((movie, index) => (
          <div key={index}>
            <img
              className="w-[15rem] h-[15rem]"
              src={movie.images}
              alt=""
            />
            <p>{movie.movie_name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footers/>
  </div>
  )
}

export default MoviesDetails