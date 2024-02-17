import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Private_Routes = () => {
  const isloggedin = localStorage.getItem("isloggedin");

  return isloggedin ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};