import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const user = useSelector((state) => state.loginUser.user);
  // console.log("from auth", user);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const loginUser = JSON.parse(loggedInUser);
  console.log(loginUser);

  const location = useLocation();

  if (!loginUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
