import { useState } from "react";

function Modal({ title, cancel, calendar, rating, all, ratings, alls }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function onOpen() {
    setIsOpenModal(true);
  }
  function onClose() {
    setIsOpenModal(false);
  }
  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <>
      <img
        onClick={onOpen}
        className="w-5 h-5"
        src="images/dots.png"
        alt=""
      />
      {isOpenModal && (
        <div
          onClick={handleOutsideClick}
          className="inset-0 backdrop-blur-sm bg-opacity-30 bg-black fixed "
        >
          <div className="w-48 h-40  bg-white ml-44 xm:ml-80 md:w-52 md:h-44 lg:ml-[34rem] lg:h-52 lg:w-56">
            <img
              onClick={onClose}
              className="w-5 h-5 ml-40 lg:w-7 lg:h-7"
              src={cancel}
            ></img>
            <div className="flex flex-row mt-2 ml-4 gap-6 md:mt-4">
              <img
                className="w-5 h-5 md:mt-2 lg:w-7 lg:h-7"
                src={calendar}
                alt=""
              />
              <h1 className="md:text-2xl ">{title}</h1>
            </div>
            <div className="flex flex-row mt-2 ml-4 gap-6 md:mt-4">
              <img
                className="w-5 h-5 md:mt-2 lg:w-7 lg:h-7"
                src={ratings}
                alt=""
              />
              <h1 className="md:text-2xl">{rating}</h1>
            </div>
            <div className="flex flex-row mt-2 ml-4 gap-6">
              <img
                className="w-5 h-5 md:mt-2 lg:w-7 lg:h-7"
                src={alls}
                alt=""
              />
              <h1 className="md:text-2xl">{all}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
