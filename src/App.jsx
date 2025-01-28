import { Routes, Route } from "react-router-dom"
import Home from "./pag/Home/Home"
import Movies from "./pag/Movies/Movies"
import Series from "./pag/Series/Series"
import Headers from "./component/Header/Headers"

function App() {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="Movies" element={<Movies/>}></Route>
        <Route path="Series" element={<Series/>}></Route>
      </Routes>
    </>
  )
}

export default App
