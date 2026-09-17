import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/products"
        replace
        state={{ from: location }}
      />
    );
  }

  // User authenticated hai
  return <Outlet />;
};

export default ProtectedRoute;