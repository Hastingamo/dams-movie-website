import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'

function ProtectedRoute() {
    const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return user ? (
    <div className="h-screen overflow-x-hidden bg-[#808080] md:bg-[#DADADA]">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute