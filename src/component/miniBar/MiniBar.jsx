import { useState, useEffect } from "react";

const MiniBar = ({
  cancel,
  modalId,
  details,
  detail,
  likes,
  like,
  dislikes,
  dislike,
  love,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    // const modal = document.getElementById(modalId);
    // modal?.close();
  };

  const openModal = () => {
    // const modal = document.getElementById(modalId);
    // modal?.showModal();
    setIsModalOpen(true);
  };
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Close the modal if the user clicks outside the modal
  return (
    <>
      <img
        onClick={openModal}
        className="w-5 h-5"
        src="images/dots.png"
        alt=""
      />

      {isModalOpen && (
        <div
          onClick={handleOutsideClick}
          id={modalId}
          className="inset-0 backdrop-blur-sm bg-opacity-30 bg-black fixed"
        >
          <div className="flex flex-col w-[24.rem] h-52 mt-52 bg-white md:w-[32.8rem] md:h-[23rem] lg:w-[49rem] lg:h-[30rem] xl:w-[70rem] xl:h-[25.938rem]">
            <img
              onClick={closeModal}
              className="w-4 h-4 ml-[22.rem] md:ml-[30rem] md:w-6 md:h-6 lg:w-5 lg:h-5 lg:ml-[47rem] xl:w-5 xl:h-5 xl:ml-[68rm]"
              src={cancel}
              alt=""
            />

            <h1 className="text-[0.8rem] ml-2 md:text-2xl lg:ml-5 xl:ml-5 lg:text-[1.6rem] xl:text-3xl">
              {title}
            </h1>
            <div className="flex flex-row gap-4 md:mt-4">
              <img
                className="w-4 h-4 mt-4 md:w-6 md:h-6 lg:w-5 lg:h-5 lg:mt-5 xl:w-5 xl:h-5 ml-2 "
                src={details}
                alt=""
              />
              <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">
                {detail}
              </h1>
            </div>
            <div className="flex flex-row gap-3 mt-2 md:mt-3 md:gap-5">
              <img
                className="w-4 h-4 ml-2 md:w-6 md:h-6 xl:w-5 xl:h-5 lg:mt-5"
                src={likes}
                alt=""
              />
              <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">
                {like}
              </h1>
            </div>
            <div className="flex flex-row gap-3 mt-2 md:mt-3 md:gap-5">
              <img
                className="w-4 h-4 ml-2 md:w-6 md:h-6 lg:mt-5 xl:w-5 xl:h-5"
                src={dislikes}
                alt=""
              />
              <h1 className="md:text-[1.2rem] lg:text-[1.4rem] lg:mt-4">
                {dislike}
              </h1>
            </div>

            <div className="flex flex-row">
              <img className="xl:w-5 xl:h-5" src="" alt="" />
              <h1>{love}</h1>
            </div>
            <div>
              <img className="xl:w-5 xl:h-5" src="" alt="" />
              <h1></h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiniBar;
