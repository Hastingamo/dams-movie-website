import { Link } from "react-router-dom"

function Headers() {
  return (
    <>
      <header className="sm:sticky">
        <nav className="hidden  w-[14.8rem] h-screen bg-[#515050] sm:flex flex-col text-white text-4xl font-normal italic pl-11 pt-14 gap-10">
          <h1>Dams</h1>
          <Link to="/">Home</Link>
          <Link to="Series">Series</Link>
          <Link to="Movies">Movies</Link>
        </nav>
      </header>
      <header className=" h-10 w-full bg-red-500 xs:w-[26rem] xm:w-[33.6rem] sm:hidden">
          <h1>Dams</h1>
      </header>
    </>
  )
}

export default Headers