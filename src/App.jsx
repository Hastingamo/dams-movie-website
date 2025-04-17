import { Routes, Route } from "react-router-dom";
import Home from "./pag/Home/Home";
import Movies from "./pag/Movies/Movies";
import Series from "./pag/Series/Series";
import Headers from "./component/Header/Headers";
import Cartoon from "./pag/cartoon/Cartoon";
import SignUp from "./pag/Signup/SignUp";
import Login from "./pag/Login/Login";
import Profile from "./pag/porfile/Profile";
import Rgister from "./pag/Register/Rgister";
import Detail from "./pag/Detail/Detail";
import Anime from "./pag/anime/Anime";
import AddToList from "./pag/AddToList/AddToList";
import Moviessss from "./pag/Detail/Moviessss";
// import ProtectedRoute from "./pag/ProtectedRoute";
// import PublicRoute from "./pag/PublicRoute";
function App() {
  return (
    <>
      <div className="xs:flex xs:flex-col md:flex-row md:flex h-screen">
        <Headers />
        <div className="flex flex-col">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="Rgister" element={<Rgister />}></Route>
            <Route path="Movies" element={<Movies />}></Route>
            <Route path="Series" element={<Series />}></Route>
            <Route path="Cartoon" element={<Cartoon />}></Route>
            <Route path="Login" element={<Login/>}></Route>
            <Route path="SignUp" element={<SignUp />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
            <Route path="Detail/:id" element={<Detail />}></Route>
            <Route path="/:category/:id" element={<Moviessss />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/:category/:id" element={<Moviessss />} />
            </Route> */}
            <Route path="Anime" element={<Anime />}></Route>
            <Route path="AddToList" element={<AddToList />}></Route>
            {/* <Route path="MoviesDetails" element={<MoviesDetails />}></Route> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
