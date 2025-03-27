import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Headers from "./components/Header/Headers";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Conditionally Render Header */}
        {isMobile ? (
          <header className="w-full h-12 bg-[#d3baba88] flex items-center justify-between px-6">
            <h1>Dams</h1>
            <div className="flex gap-4">
              <a href="/Login">Login</a>
              <a href="/SignUp">SignUp</a>
            </div>
          </header>
        ) : (
          <Headers />
        )}

        {/* Main Content */}
        <div className="w-full">
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
