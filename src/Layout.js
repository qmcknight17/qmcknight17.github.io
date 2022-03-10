import React, { useState } from "react";
import Navigation from "./Navigation";
import { Routes, Route, Outlet , useNavigate} from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import BottomNav from "./BottomNav";


const Layout = () => {
  
  const navigate = useNavigate();
  const { user } = useUserAuth();
  if (!user) {
    navigate("/");
  } return (
    <div className="LayoutContainer">
      <Navigation></Navigation>
      <Outlet />
      <BottomNav></BottomNav>
    </div>
  );
}

export default Layout;