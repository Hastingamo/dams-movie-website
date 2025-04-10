import React, { useState } from 'react'
import Searchs from '../SearchBar/Searchs';
function Search() {
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
        {
            isOpenSearch && (
                <div onClick={handleOutsideClick} className='inset-0 backdrop-blur-sm bg-opacity-30 bg-black fixed '>
                    <Searchs onClick="onClose" />
                </div>
            )
        }
    </>
  )
}

export default Search