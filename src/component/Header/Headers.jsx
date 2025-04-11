import { Link } from "react-router-dom";
import Headerss from "./Headerss";

function Headers() {
  return (
    <>
      <header className="hidden xm:hidden md:h-screen xm:w-[20rem] md:flex md:flex-col bg-[#515050] ">
        <div className="ml-14 gap-8 flex flex-col md:text-2xl text-white">
        <h1 className="mt-4">Dams</h1>
        <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="Home">Home</Link>
        <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="Movies">Movies</Link>
        <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="Series">Series</Link>
        <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="AddToList">AddToList</Link>
        {/* <Link to="MoviesDetails">MoviesDetails</Link> */}
        <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="Profile">Profile</Link>
          <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="Login">Login</Link>
          <Link className="mr-3 hover:bg-slate-400 hover:w-auto active:bg-slate-700" to="SignUp">SignUp</Link>
        </div>
      </header>

      <header className=" h-10 w-full bg-[#d3baba88] flex flex-row sm:hidden">
        {/* <h1 className="flex justify-center items-center">Dams</h1> */}
        <h1 className="ml-11">Dams</h1>
        <div className="ml-48 gap-8 flex flex-row">
          <Link to="Login">Login</Link>
          <Link to="SignUp">SignUp</Link>
        </div>
        {/* <Headerss className="ml-[2rem]"/> */}
      </header>
    </>
  );
}

export default Headers;
