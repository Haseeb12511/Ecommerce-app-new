import React from "react";
import { Navigate } from "react-router-dom";
import isAuth from "../utils/isAuth";

const ProtectedRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
