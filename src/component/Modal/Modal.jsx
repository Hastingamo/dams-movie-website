function Modal({title}) {
  return (
    <>
      <img
        className="w-5 h-5"
        src="images/dots.png"
        alt=""
      />
      <div>
        <div className="w-">
            <img src="images/" alt=""/> 
            <h1>{title}</h1>  
        </div>
      </div>
    </>
  );
}

export default Modal;
