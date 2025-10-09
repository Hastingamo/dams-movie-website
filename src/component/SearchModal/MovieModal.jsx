import React from "react";
import SearchBar from "../../Searchbar"
import { useState } from "react";
function MovieModal() {
  const [isOpenSearch, setisOpenSearch] = useState();
  function onOpen() {
    setisOpenSearch(true);
  }
  function onClose() {
    setisOpenSearch(false);
  }
  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <>
      <img src="search.png" alt="" className="w-5 h-5 transform transition-transform hover:scale-125  absolute right-2 xl:right-6" onClick={onOpen}/>
      {isOpenSearch && (
        <div
          onClick={handleOutsideClick}
          className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex  justify-center z-50"
        >
          <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl shadow-lg p-6">
                    <img src="close.png" alt="" className="w-7 h-7 fixed top-0 right-3  md:right-28 xp:right-32 lg:right-56 xl:right-[25rem] " onClick={onClose}/>
            <SearchBar onClick="onClose" />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieModal;
