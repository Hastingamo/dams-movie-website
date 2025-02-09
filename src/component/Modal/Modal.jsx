function Modal({ title }) {
  return (
    <>
      <img className="w-5 h-5" src="images/dots.png" alt="" />
      <div>
        <div className="w-48 h-48 bg-white">
          <div className="flex flex-row mt-6">
            <img src="images/" alt="" />
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
