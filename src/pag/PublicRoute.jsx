import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return user ? <Navigate to="/dashboard" replace /> : children;
}

export default PublicRoute;
