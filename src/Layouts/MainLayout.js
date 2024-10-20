import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout()  
{
    return (
        <div className="gradient">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default MainLayout;