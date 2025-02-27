import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <header className="sm:sticky">
        <nav className="hidden  w-[14.8rem] h-screen bg-[#515050] sm:flex flex-col text-white text-4xl font-normal italic pl-11 pt-14 gap-10">
          <Link to="Home">Home</Link>
          <Link to="Series">Series</Link>
          <Link to="Movies">Movies</Link>
          <Link to="Cartoon">Cartoon</Link>
          <Link to="Login">Login</Link>
          <Link to="SignUp">SignUp</Link>
          <Link to="Profile">Profile</Link>

        </nav>
      </header>
      <header className=" h-10 w-full bg-red-500 flex flex-row xs:w-[27rem] xm:w-[33.6rem] sm:hidden">
        {/* <h1 className="flex justify-center items-center">Dams</h1> */}
        <h1>Dams</h1>
        <Link to="Home">Home</Link>
        <Link to="Series">Series</Link>
        <Link to="Movies">Movies</Link>
        <Link to="Cartoon">Cartoon</Link>
        <Link to="Login">Login</Link>
        <Link to="SignUp">SignUp</Link>
        <Link to="Profile">Profile</Link>
        <Link to="/">Register</Link>


      </header>
    </>
  );
}

export default Headers;
