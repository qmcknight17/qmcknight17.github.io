import React, { useState } from "react";
import Navigation from "./Navigation";
import { Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div className="LayoutContainer">
        <Navigation></Navigation>
        <Outlet />
      </div>
     );
}
 
export default Layout;