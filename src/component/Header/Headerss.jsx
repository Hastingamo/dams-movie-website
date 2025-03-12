import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Headerss() {
  const navigate = useNavigate();
  const [isOpen, setISOPen] = useState(false);
  const open = () => {
    setISOPen(true);
  };
  const close = () => {
    setISOPen(false);
  };
  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      close();
    }
  }

  return (
    <>
      <img onClick={open} className="w-5 h-5" src="images/list.png" alt="" />
      {isOpen && (
        <div
          onClick={handleOutsideClick}
          className="inset-0 backdrop-blur-sm bg-opacity-30 bg-black  "
        >
          <div className="w-32 absolute top-7 left-7 h-[15rem] flex flex-col bg-red-400">
            <img
              onClick={close}
              className="w-5 h-5"
              src="images/cancel.png"
              alt=""
            />
            <div className="gap-5 flex flex-col">
              <button onClick={() => navigate("/Home")}>Home</button>
              <button onClick={() => navigate("/Movies")}>Movies</button>
              <button onClick={() => navigate("/Series")}>Series</button>
              <button onClick={() => navigate("/Cartoon")}>Cartoon</button>
              <button onClick={() => navigate("/Profile")}>Profile</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Headerss;
