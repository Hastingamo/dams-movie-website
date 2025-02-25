import React from "react";
import { useNavigate } from "react-router-dom";
function DashBoard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login"); // Redirect to login page
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default DashBoard