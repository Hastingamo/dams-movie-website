import { Link } from "react-router-dom";
function Headerss() {
  return (
    <>
      <header className=" h-10 w-[2rem] bg-[#d3baba88] flex flex-row  sm:hidden">
        {/* <h1 className="flex justify-center items-center">Dams</h1> */}
        <h1 className="ml-11">Dams</h1>
        <div className="ml-14 gap-8 flex flex-row">
          <Link to="Login">Login</Link>
          <Link to="SignUp">SignUp</Link>
        </div>
        {/* <Headerss className="ml-[2rem]"/> */}
      </header>
    </>
  );
}

export default Headerss;
