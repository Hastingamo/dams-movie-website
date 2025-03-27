import { Routes, Route } from "react-router-dom";
import Home from "./pag/Home/Home";
import Movies from "./pag/Movies/Movies";
import Series from "./pag/Series/Series";
import Headers from "./component/Header/Headers";
import Footer from "./component/Footer/Footer";
import Cartoon from "./pag/cartoon/Cartoon";
import SignUp from "./pag/Signup/SignUp";
import Login from "./pag/Login/Login";
import Profile from "./pag/porfile/Profile";
import Rgister from "./pag/Register/Rgister";
import Detail from "./pag/Detail/Detail";
import Anime from "./pag/anime/Anime";
import AddToList from "./pag/AddToList/AddToList";
import Headerss from "./component/Header/Headerss";

function App() {
  return (
    <>
      <div className=" flex h-screen">
        <Headers className="hidden md:flex" />
        <Headerss className="flex md:hidden"/>
        <div>
          <Routes>
            <Route path="" element={<Rgister />}></Route>
            {/* <Route path="Home" element={<Home />}></Route> */}
            <Route path="Movies" element={<Movies />}></Route>
            <Route path="Series" element={<Series />}></Route>
            <Route path="Cartoon" element={<Cartoon />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="SignUp" element={<SignUp />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
            <Route path="Detail/:id" element={<Detail />}></Route>
            <Route path="Anime" element={<Anime />}></Route>
            <Route path="AddToList" element={<AddToList />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
