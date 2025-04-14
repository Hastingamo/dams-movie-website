import React from "react";
import SearchBar from "../SearchBar/SearchBar";
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
      <h1 onClick={onOpen}>search</h1>
      {isOpenSearch && (
        <div
          onClick={handleOutsideClick}
          className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex  justify-center z-50"
        >
          <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl shadow-lg p-6">
            <SearchBar onClick="onClose" />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieModal;
