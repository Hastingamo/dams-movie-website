import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Header/Headers";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Desktop Header (Sidebar) */}
        <div className="hidden sm:flex">
          <Headers />
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Mobile Header (Visible only on small screens) */}
          <header className="sm:hidden w-full h-12 bg-[#d3baba88] flex items-center justify-between px-6">
            <h1>Dams</h1>
            <div className="flex gap-4">
              <a href="/Login">Login</a>
              <a href="/SignUp">SignUp</a>
            </div>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
