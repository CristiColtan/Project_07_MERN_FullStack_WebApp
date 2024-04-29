import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  const isAdmin = currentUser && currentUser.isadmin === "Yes";

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
