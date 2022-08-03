import React from "react";
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const login = useSelector((state) => state.loginUser.user);
  // console.log("from login", login);
  // const register = useSelector((state) => state.registerUser.user);
  // console.log("from regsiter", register);

  const loggedInUser = localStorage.getItem("loggedInUser");
  const loginUser = JSON.parse(loggedInUser);

  const location = useLocation();

  if (!loginUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
